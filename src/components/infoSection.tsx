import styles from "../styles/components/infoSection.module.css";
import { icons, pfp } from "../utils/icons";
import { useLanguage } from "../contexts/language.context";
import LanguageToggle from "./LanguageToggle";

export default function () {
  const { texts } = useLanguage();
  
  return (
    <div className={styles["info-section"]}>
      <aside className={styles["left-aside"]}>
        
        <div className={styles["header-section"]}>
          <LanguageToggle />
          <h1>{texts.portfolio}</h1>
        </div>

        <div className={styles["main-text"]}>
          <p>{texts.greeting}</p>
          <p>{texts.name}</p>
          <p>{texts.role}</p>
        </div>
      </aside>

      <section className={styles.profile}>
        <header>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-santos-7187b9189/"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
            {texts.linkedin}
          </a>
          <a href="https://github.com/JohnsCoder" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            {texts.github}
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWhHHBlfsgWLWbfvHtqPpctccFgPfCHfCzvdPlgTPWFCLngtsZPKQxJXdtJFjkVLzlSjB"
            target="_blank"
          >
            <img src={icons.mailIcon} alt="" />
            {texts.email}
          </a>
        </header>
        <div>
          <img className={styles.picture} src={pfp} alt="" />
        </div>
      </section>
    </div>
  );
}
