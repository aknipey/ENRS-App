import { atom, useAtom } from "jotai";
import { SelectedStandardsIds } from "../types/selectedStandardTypes";

export const selectedStandardsIdsAtom = atom<SelectedStandardsIds>([]);

export function useSelectedStandardsIdsAtom() {
  return useAtom(selectedStandardsIdsAtom);
}