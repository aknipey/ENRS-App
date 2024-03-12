import { standardsStructure } from "../Standards/standardsStructure";
import {
  AllStandards,
  ChemicalProfile,
  RangeValue,
  Standard,
} from "../Standards/standardsTypes";
import { ChemData, FilteredChemData, JSONObject } from "../types/fileStorage";
import {
  SelectedStandardsId,
  SelectedStandardsIds,
} from "../types/selectedStandardTypes";

// Returns an array of standards and their names that have been selected.
const selectStandards = (
  standardsIds: SelectedStandardsIds
): AllStandards[] => {
  const selectedStandards = standardsIds.map((path: SelectedStandardsId) => {
    let standard: AllStandards = standardsStructure[path[0]];

    for (let i = 1; i < path.length; i++) {
      standard = (standard.value as AllStandards[])[path[i]] as AllStandards;
    }

    return standard;
  });

  return selectedStandards;
};

export const findExceedances = (
  chemFile: JSONObject,
  sampleFile: JSONObject,
  selectedStandardsIds: SelectedStandardsIds
): JSONObject => {
  const standards = selectStandards(selectedStandardsIds);

  const chemData = [...chemFile.data] as ChemData[];
  const sampleData = [...sampleFile.data];
  //! Need to look at special cases from the sample file

  const filteredChemData: FilteredChemData[] = chemData.map(
    (chem: ChemData) => {
      let exceeded_standards = "";
      let exceeded_notes = "";
      let resultUnit = chem.Result_Unit;

      standards.forEach((standard: AllStandards) => {
        const chemProfiles = (standard.value as Standard).values.filter(
          (profile: ChemicalProfile) => {
            return profile.chemCode === chem.ChemCode;
          }
        );

        if (chemProfiles.length === 0) {
          return;
        }

        chemProfiles.forEach((profile: ChemicalProfile) => {
          if (profile.value === -999) {
            exceeded_notes += `No ${standard.name} standard for ${profile.chemName}. `;
            return;
          }
          let result = Number(chem.Result);

          //! Special Cases with pH and O2
          if (resultUnit.charCodeAt(0) > 127) {
            if (resultUnit.includes("g/L")) {
              resultUnit = "ug/L";
            }
            if (resultUnit.includes("g/kg")) {
              resultUnit = "ug/kg";
            }
          }

          if (chem.ChemCode.includes("pH")) {
            if (
              result < (profile.value as RangeValue).min ||
              result > (profile.value as RangeValue).max
            ) {
              exceeded_standards += `${standard.name}, `;
              exceeded_notes += `Outside range for ${profile.chemName}. `;
            }
          } else if (chem.ChemCode.includes("DO%Sat")) {
            if (result < (profile.value as number)) {
              exceeded_standards += `${standard.name}, `;
              exceeded_notes += `Exceeded ${profile.chemName} ${standard.name} standard of ${profile.value} ${profile.units} with a result of ${result} ${profile.units}.\n`;
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
              } else if (resultUnit === "%") {
                return;
              } else {
                console.log(
                  "Mismatched units",
                  profile.chemName,
                  "profile units: ",
                  profile.units,
                  "chem.Result_Unit: ",
                  resultUnit
                );
                return;
              }
            }
            if (result > (profile.value as number)) {
              exceeded_standards += `${standard.name}, `;
              exceeded_notes += `Exceeded ${profile.chemName} ${standard.name} standard of ${profile.value} ${profile.units} with a result of ${chem.Result} ${resultUnit}. `;
              console.log(exceeded_notes);
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
      };
    }
  );

  return JSON.parse(
    // eslint-disable-next-line no-control-regex
    JSON.stringify({ data: filteredChemData }).replace(/[^\x00-\x7F]/g, "u")
  );
};
