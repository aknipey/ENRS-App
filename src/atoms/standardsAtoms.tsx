import { atom, useAtom } from "jotai";
import {
  QuickSelectTable,
  ScreenedQSRules,
  SelectedStandardsIds,
} from "../types/selectedStandardTypes";
import { INITIAL_QS_RULES } from "../consts/screeningCriteriaQSConsts";

export const selectedStandardsIdsAtom = atom<SelectedStandardsIds>([]);

export function useSelectedStandardsIdsAtom() {
  return useAtom(selectedStandardsIdsAtom);
}

export const quickSelectedTablesAtom = atom<QuickSelectTable[]>([]);

export function useQuickSelectedTablesAtom() {
  return useAtom(quickSelectedTablesAtom);
}

export const screeningCriteriaQSAtom = atom<ScreenedQSRules>(INITIAL_QS_RULES);

export function useScreeningCriteriaQSAtom() {
  return useAtom(screeningCriteriaQSAtom);
}
