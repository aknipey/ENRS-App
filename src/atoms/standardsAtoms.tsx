import { atom, useAtom } from "jotai";
import { SelectedStandardsIds } from "../types/selectedStandardTypes";

export const selectedStandardsIdsAtom = atom<SelectedStandardsIds>([]);

export function useSelectedStandardsIdsAton() {
  return useAtom(selectedStandardsIdsAtom);
}