import { atom, useAtom } from "jotai";
import { QuickSelectTable, SelectedStandardsIds } from "../types/selectedStandardTypes";

export const selectedStandardsIdsAtom = atom<SelectedStandardsIds>([]);

export function useSelectedStandardsIdsAtom() {
  return useAtom(selectedStandardsIdsAtom);
}

export const quickSelectedTablesAtom = atom<QuickSelectTable[]>([]);

export function useQuickSelectedTablesAtom() {
  return useAtom(quickSelectedTablesAtom);
}