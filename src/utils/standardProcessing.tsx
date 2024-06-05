import { standardsStructure } from "../Standards/standardsStructure";
import {
  AllStandards,
  ChemicalProfile,
  DepthConds,
  Matrix,
  RangeValue,
  Standard,
} from "../Standards/standardsTypes";
import {
  ChemData,
  FilteredChemData,
  JSONObject,
  SampleData,
} from "../types/fileStorage";
import {
  QuickSelectTable,
  ScreenedQSRules,
  SelectedStandardsId,
  SelectedStandardsIds,
} from "../types/selectedStandardTypes";
import { screenedOut } from "./selections";

// Returns an array of standards and their names that have been selected.
export const selectStandards = (
  standardsIds: SelectedStandardsIds
): Standard[] => {
  const selectedStandards = standardsIds.map((path: SelectedStandardsId) => {
    let standard: AllStandards = standardsStructure[path[0]];

    let i = 1;
    while (i < path.length - 1) {
      standard = (standard.value as AllStandards[])[path[i]];
      i++;
    }

    return standard.value[path[i]] as Standard;
  });

  return Array.from(new Set(selectedStandards));
};

export const findSampleMatrix = (
  chem: ChemData,
  sampleData: SampleData[]
): Matrix => {
  const sample = sampleData.find(
    (sample: JSONObject) => String(sample.SampleCode) === chem.SampleCode
  );

  if (!sample) {
    console.log("Sample not found for ", chem);
    return "Error" as Matrix;
  }

  return sample.Matrix_Type;
};

export const processConditions = (
  conditions: string
): DepthConds | undefined => {
  // Regular expression to match the specific format
  const regex = />=(\d+)(?:, <(\d+))?/;
  const match = conditions.match(regex);

  if (match) {
    const n1 = parseInt(match[1]);
    const n2 = match[2] ? parseInt(match[2]) : undefined;

    return { upper: n1, lower: n2 };
  }

  return undefined;
};

// Returns -1 if no depth
export const findSampleDepth = (
  chem: ChemData,
  sampleData: SampleData[]
): number => {
  const depth = sampleData.find(
    (s: SampleData) => s.SampleCode === chem.SampleCode
  )?.Depth;
  return depth ? Number(depth) : -1;
};

// Returns the filtered exceedance data wrapped in a json object
export const findTableExceedances = (
  chemFile: JSONObject,
  sampleFile: JSONObject,
  standards: Standard[]
): JSONObject => {
  const chemData = [...chemFile.data] as ChemData[];
  const sampleData = [...sampleFile.data] as SampleData[];
  //! Need to look at special cases from the sample file

  // For each test result
  const filteredChemData: FilteredChemData[] = chemData.map(
    (chem: ChemData, i: number) => {
      let exceeded_standards = "";
      let exceeded_notes = "";
      let resultUnit = chem.Result_Unit;
      let hasStandard = false;
      const sampleMatrix = findSampleMatrix(chem, sampleData);

      // Returning if not a regular result
      if (chem.Result_Type !== "REG") {
        return {
          ...chem,
          exceeded_standards,
          exceeded_notes,
          hasStandard,
        };
      }

      // Returning if there is a Matrix error
      if (sampleMatrix === ("Error" as Matrix)) {
        console.log("Matrix Error at chemistry file row", i + 2);
        return {
          ...chem,
          Result_Unit: resultUnit,
          exceeded_standards,
          exceeded_notes,
          hasStandard,
        };
      }

      // For each standard
      standards.forEach((standard: Standard) => {
        // Check matrices match
        if (
          standard.standardInfo.matrix.toLocaleLowerCase() !==
          sampleMatrix.toLocaleLowerCase()
        ) {
          return;
        }

        // Get all the relevant chem profiles from the standard. Look at chem and depth
        const chemProfiles = standard.values.filter(
          (profile: ChemicalProfile) => {
            const chemDepth = findSampleDepth(chem, sampleData);
            if (profile?.conditions) {
              const depthConds = processConditions(profile.conditions);
              if (!depthConds) {
                console.log("Profile conditions but not matched numbers");
                return profile.chemCode === chem.ChemCode;
              }
              if (chemDepth < depthConds.upper) return false;
              if (depthConds.lower && chemDepth >= depthConds.upper)
                return false;
              return true;
            }
            return profile.chemCode === chem.ChemCode;
          }
        );

        if (chemProfiles.length === 0) {
          return;
        }

        hasStandard = true;

        chemProfiles.forEach((profile: ChemicalProfile) => {
          if (profile.value === -999) {
            exceeded_notes += `- No ${standard.visual.name} standard for ${profile.chemName}. -`;
            return;
          }
          let result = Number(chem.Result);

          // Note: This will replace all non-ascii starting characters with 'u'
          if (resultUnit.charCodeAt(0) > 127) {
            if (resultUnit.includes("g/L")) {
              resultUnit = "ug/L";
            }
            if (resultUnit.includes("g/kg")) {
              resultUnit = "ug/kg";
            }
          }

          // Special Cases with pH and O2
          if (chem.ChemCode.includes("pH_")) {
            if (
              (result < (profile.value as RangeValue).min ||
                result > (profile.value as RangeValue).max) &&
              resultUnit !== "%"
            ) {
              exceeded_standards += `${standard.visual.name}, `;
              exceeded_notes += `- Outside ${profile.chemName} range of ${
                (profile.value as RangeValue).min
              }-${
                (profile.value as RangeValue).max
              } with a result of ${result}. -`;
            }
          } else if (chem.ChemCode.includes("DO%Sat")) {
            if (result < (profile.value as number) && resultUnit !== "%") {
              exceeded_standards += `${standard.visual.name}, `;
              exceeded_notes += `- Exceeded ${profile.chemName} ${standard.visual.name} standard of ${profile.value} ${profile.units} with a result of ${result} ${profile.units} -`;
            }
          } else if (chem.Prefix !== "<") {
            if (profile.units !== resultUnit) {
              if (resultUnit.includes("ug") && profile.units.includes("mg")) {
                result = result / 1000;
              } else if (
                profile.units.includes("ug") &&
                resultUnit.includes("mg")
              ) {
                result = result * 1000;
              } else {
                if (resultUnit !== "%") {
                  console.log(
                    "Mismatched units",
                    profile.chemName,
                    "profile units: ",
                    profile.units,
                    "chem.Result_Unit: ",
                    resultUnit
                  );
                }
                return;
              }
            }
            if (result > (profile.value as number)) {
              exceeded_standards += `${standard.visual.name}, `;
              exceeded_notes += `- Exceeded ${profile.chemName} ${standard.visual.name} standard of ${profile.value} ${profile.units} with a result of ${chem.Result} ${resultUnit}. -`;
            }

            if (profile.chemName !== chem.OriginalChemName) {
              exceeded_notes += `- Chemical name mismatch: '${chem.OriginalChemName}' in data file, '${profile.chemName}' in standard. -`;
            }

            if (profile.comments) {
              exceeded_notes += `- ${profile.comments} -`;
            }
          }
        });
      });

      chem.Result_Unit = resultUnit;
      return {
        ...chem,
        Result_Unit: resultUnit,
        exceeded_standards,
        exceeded_notes,
        hasStandard,
      };
    }
  );

  return JSON.parse(
    // eslint-disable-next-line no-control-regex
    JSON.stringify({ data: filteredChemData }).replace(/[^\x00-\x7F]/g, "u")
  );
};

export const findAllExceedances = (
  chemFile: JSONObject,
  sampleFile: JSONObject,
  selectedStandardsIds: SelectedStandardsIds,
  quickSelectTables: QuickSelectTable[],
  screeningCriteriaQS: ScreenedQSRules
): JSONObject[] => {
  const customStandards = selectStandards(selectedStandardsIds);

  let tablesStandards: Standard[][] = [];

  quickSelectTables.forEach((table: QuickSelectTable) => {
    const qsTableStandards: Standard[] = [];

    table.standards.forEach((standard: Standard) => {
      if (!screenedOut(standard, screeningCriteriaQS)) {
        qsTableStandards.push(standard);
      }
    });
    tablesStandards.push(qsTableStandards);
  });

  tablesStandards.push(customStandards);

  return tablesStandards.map((standards: Standard[]) =>
    findTableExceedances(chemFile, sampleFile, standards)
  );
};
