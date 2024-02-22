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
});

export function useAllInputsAtom() {
  return useAtom(allInputsAtom);
}