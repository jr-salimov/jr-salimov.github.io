import { FormattedMessage, useIntl } from "react-intl";
import { WordToLetters } from "../../components/WordToLetters";
import styles from "./Home.module.scss";
import computer from "../../assets/images/computer.svg";
import arrow from "../../assets/images/arrow.svg";

export function Home() {
  const intl = useIntl();

  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          <WordToLetters words={intl.formatMessage({ id: "title1" })} />
        </span>
        <span className={styles.description}>
          <FormattedMessage id="description1" />
        </span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            <FormattedMessage id="aboutMe" />
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </a>
        </span>
      </div>
      <div className={styles.computer}>
        <img src={computer} alt="Computer" />
      </div>
    </section>
  );
}
