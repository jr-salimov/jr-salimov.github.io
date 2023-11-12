import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { LangSwitcher } from "../LangSwitcher/index.jsx";
import { Menu } from "../Menu";
import { GITHUB_LINK } from "../../links.js";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import github from "../../assets/images/github.svg";

const themeAtom = atomWithStorage("theme", true);
export function Header(props) {
  //Changing theme
  const [themeChanged, setThemeChanged] = useAtom(themeAtom);
  const onSwitch = () => {
    setThemeChanged(!themeChanged);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <label>
          <input
            className={styles.switchInput}
            type="checkbox"
            role="switch"
            onClick={onSwitch}
            checked={themeChanged}
            id="themeSwitcher"
            readOnly
          />
          <img src={logo} alt="logo" className={styles.logoIcon} />
        </label>

        <div className={styles.logoText}>PORTFOLIO</div>
      </div>
      <div className={styles.mobileMenu}>
        <LangSwitcher />
      </div>
      <Menu />
      <div className={styles.settings}>
        <a href={GITHUB_LINK}>
          <img src={github} alt="github" className={styles.github} />
        </a>
        <LangSwitcher />
      </div>
    </header>
  );
}
