import { atom, useAtom } from "jotai";
import { AllInputs, JSONObject } from "../types/fileStorage";

export const resultFileAtom = atom<JSONObject | undefined>(undefined);

export function useResultFileAtom() {
  return useAtom(resultFileAtom);
}

export const allInputsAtom = atom<AllInputs>({
  chemFileName: "",
  sampleFileName: "",
  selectedStandardsIds: [],
  screeningCriteriaQS: {
    sediment: {
      sand: false,
      silt: false,
      clay: false,
    },
    texture: {
      coarse: false,
      fine: false,
    },
    water: {
      marine: false,
      freshwater: false,
    },
  },
  quickSelectedTables: [],
});

export function useAllInputsAtom() {
  return useAtom(allInputsAtom);
}
