import { useIntl } from "react-intl";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export function Menu() {
  const intl = useIntl();

  const menuItems = [
    { link: "#home", title: intl.formatMessage({ id: "home" }) },
    { link: "#about", title: intl.formatMessage({ id: "about" }) },
    { link: "#skills", title: intl.formatMessage({ id: "skills" }) },
    { link: "#projects", title: intl.formatMessage({ id: "projects" }) },
    { link: "#contacts", title: intl.formatMessage({ id: "contacts" }) },
  ];
  const { isMobileOrTablet } = useWindowDimensions();
  const MenuView = isMobileOrTablet ? MobileMenu : DesktopMenu;

  return <MenuView items={menuItems} />;
}
