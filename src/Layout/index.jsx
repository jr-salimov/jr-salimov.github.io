import { IntlProvider } from "react-intl";
import { LOCALES } from "../assets/i18n/locales";
import { messages } from "../assets/i18n/messages";
import { useAtom } from "jotai";
import { langAtom } from "../atom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./Layout.module.scss";

export function Layout({ children }) {
  const [currentLocale, setCurrentLocale] = useAtom(langAtom);

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className={styles.layout}>
        <Header />
        <main> {children} </main>
        <Footer />
      </div>
    </IntlProvider>
  );
}
