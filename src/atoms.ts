import { atom } from "recoil";

export const isDarkState = atom<boolean>({
  key: "isDark",
  default:
    JSON.parse(localStorage.getItem("isDark") as any) !== null
      ? JSON.parse(localStorage.getItem("isDark") as any)
      : true,
});
