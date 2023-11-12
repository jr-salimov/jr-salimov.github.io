import { atomWithStorage } from "jotai/utils";
import { LOCALES } from "./assets/i18n/locales";

export const langAtom = atomWithStorage("locale", LOCALES.ENGLISH);
export const langName = atomWithStorage("language", "EN");
