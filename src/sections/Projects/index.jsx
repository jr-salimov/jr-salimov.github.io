import { FormattedMessage, useIntl } from "react-intl";
import { WordToLetters } from "../../components/WordToLetters";
import styles from "./Projects.module.scss";
import arrow from "../../assets/images/arrow.svg";

export function Projects() {
  const intl = useIntl();

  return (
    <section className={styles.wrapper} id="projects">
      <div className={styles.experience}>
        <WordToLetters words={intl.formatMessage({ id: "title4" })} />
      </div>
      <div className={styles.description}>
        <FormattedMessage id="description4" />
      </div>
      <div className={styles.link}>
        <a href="#home" className={styles.seeProjects}>
          <div>
            <FormattedMessage id="seeProjects" />
          </div>
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </a>
      </div>
    </section>
  );
}
