import { FormattedMessage, useIntl } from "react-intl";
import { WordToLetters } from "../../components/WordToLetters";
import styles from "./About.module.scss";

export function About() {
  const intl = useIntl();

  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.title}>
        <span className={styles.name}>
          <WordToLetters words={intl.formatMessage({ id: "title2_1" })} />
        </span>
        <br />

        <span className={styles.position}>
          <WordToLetters words={intl.formatMessage({ id: "title2_2" })} />
        </span>

        <br />
        <span className={styles.small}>
          <FormattedMessage id="smallText1" />
        </span>
      </div>{" "}
      <div className={styles.description}>
        <FormattedMessage id="description2" />
      </div>
    </section>
  );
}
