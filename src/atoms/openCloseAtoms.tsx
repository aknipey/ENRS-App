import { atom, useAtom } from "jotai";

export const infoOpenAtom = atom<boolean>(false);

export function useInfoOpenAtom() {
  return useAtom(infoOpenAtom);
}