import { atom, useAtom } from "jotai";
import { JSONObject } from "../types/fileStorage";

export const currentFileAtom = atom<JSONObject>({});

export function useCurrentFileAtom() {
  return useAtom(currentFileAtom);
}

export const currentFileNameAtom = atom<string>("");

export function useCurrentFileNameAtom() {
  return useAtom(currentFileNameAtom);
}
