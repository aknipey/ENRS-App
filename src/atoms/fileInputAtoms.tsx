import { atom, useAtom } from "jotai";
import { JSONObject } from "../types/fileStorage";

export const chemFileAtom = atom<JSONObject | undefined>(undefined);

export function useChemFileAtom() {
  return useAtom(chemFileAtom);
}

export const sampleFileAtom = atom<JSONObject | undefined>(undefined);

export function useSampleFileAtom() {
  return useAtom(sampleFileAtom);
}

export const chemFileNameAtom = atom<string>("");

export function useChemFileNameAtom() {
  return useAtom(chemFileNameAtom);
}

export const sampleFileNameAtom = atom<string>("");

export function useSampleFileNameAtom() {
  return useAtom(sampleFileNameAtom);
}
