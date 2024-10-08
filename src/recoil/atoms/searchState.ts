import { atom } from "recoil";

export const searchState = atom<string>({
  key:"searchState",
  default:'Korea',
  
}) //검색이라서 string