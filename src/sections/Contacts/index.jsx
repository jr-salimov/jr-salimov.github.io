import { FormattedMessage, useIntl } from "react-intl";
import { WordToLetters } from "../../components/WordToLetters";
import { INSTAGRAM_LINK, GMAIL_LINK } from "../../links.js";
import styles from "./Contacts.module.scss";
import mail from "../../assets/images/mail.svg";

export function Contacts() {
  const intl = useIntl();

  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.title}>
        <WordToLetters words={intl.formatMessage({ id: "title5" })} />
      </div>

      <div className={styles.description}>
        <FormattedMessage id="description5" />{" "}
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href={GMAIL_LINK}
          target="_blank"
          className={styles.email}
          rel="noreferrer"
        >
          <img src={mail} alt="mail_logo" className={styles.mailIcon} />
          <WordToLetters words="jr.salimov@gmail.com" />
        </a>
      </div>
    </section>
  );
}
