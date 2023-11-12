import { useState } from "react";
import { useAtom } from "jotai";
import { langAtom, langName } from "../../atom";
import { LOCALES } from "../../assets/i18n/locales";
import styles from "./Languages.module.scss";

export function LangSwitcher() {
  const [switched, setSwitched] = useState(true);
  const [currentLocale, setCurrentLocale] = useAtom(langAtom);
  const [name, setName] = useAtom(langName);

  const inEnglish = () => {
    setSwitched(!switched);
    setCurrentLocale(LOCALES.RUSSIAN);
    setName("RU");
  };

  const inRussian = () => {
    setSwitched(!switched);
    setCurrentLocale(LOCALES.ENGLISH);
    setName("EN");
  };

  return (
    <div className={styles.langChoice}>
      {switched ? (
        <button
          className={styles.language}
          id={styles.english}
          onClick={inEnglish}
        >
          {name}
        </button>
      ) : (
        <button
          className={styles.language}
          id={styles.english}
          onClick={inRussian}
        >
          {name}
        </button>
      )}
    </div>
  );
}
