import { atom } from "recoil";

export const isDarkState = atom<boolean>({
  key: "isDark",
  default: JSON.parse(localStorage.getItem("isDark") || "true")
    ? JSON.parse(localStorage.getItem("isDark") || "true")
    : false,
});
