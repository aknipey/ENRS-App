import { atom, useAtom } from "jotai";
import { JSONObject } from "../types/fileStorage";

export const chemFileAtom = atom<JSONObject>({});

export function useChemFileAtom() {
  return useAtom(chemFileAtom);
}

export const sampleFileAtom = atom<JSONObject>({});

export function useSampleFileAtom() {
  return useAtom(sampleFileAtom);
}

export const fileNameAtom = atom<string>("");

export function useFileNameAtom() {
  return useAtom(fileNameAtom);
}
