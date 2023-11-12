import {
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  DRIBBLE_LINK,
  DISCORD_LINK,
} from "../../links.js";
import styles from "./Footer.module.scss";
import github from "../../assets/images/Contacts/github.svg";
import instagram from "../../assets/images/Contacts/instagram.svg";
import linkedin from "../../assets/images/Contacts/linkedin.svg";
import dribble from "../../assets/images/Contacts/dribble.svg";
import discord from "../../assets/images/Contacts/discord.svg";

const iconsArr = [
  { href: GITHUB_LINK, src: github, alt: "github" },
  { href: INSTAGRAM_LINK, src: instagram, alt: "instagram" },
  { href: LINKEDIN_LINK, src: linkedin, alt: "linkedin" },
  { href: DRIBBLE_LINK, src: dribble, alt: "dribble" },
  { href: DISCORD_LINK, src: discord, alt: "discord" },
];
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {iconsArr.map((icon, id) => (
          <a href={icon.href} key={id}>
            <img src={icon.src} alt={icon.alt} className={styles.icon} />
          </a>
        ))}
      </div>
      <div className={styles.copyright}>&copy; 2023. Atoullo Salimov</div>
    </footer>
  );
}
