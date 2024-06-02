import { atom, useAtom } from "jotai";
import { JSONObject } from "../types/fileStorage";

export const resultFileAtom = atom<JSONObject | undefined>(undefined);

export function useResultFileAtom() {
  return useAtom(resultFileAtom);
}
