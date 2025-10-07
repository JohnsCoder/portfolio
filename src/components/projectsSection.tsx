import { icons } from "../utils/icons";
import styles from "../styles/components/projectsSection.module.css";
import { useContext } from "react";
import Cards from "./cards";
import { ProjectContext } from "../contexts/projects.context";
import { useLanguage } from "../contexts/language.context";

export default function () {
  const { projects } = useContext(ProjectContext);
  const { texts } = useLanguage();

  return (
    <div className={styles["projects-section"]}>
      <h1>{texts.projects}</h1>

      <div className={styles.cards}>
        {projects.map((element, index) => (
          <Cards
            key={index}
            icon={icons.reactIcon}
            title={element.name}
            link={element.homepage}
            description={element.description}
            language={element.language}
          />
        ))}
      </div>

      <footer>
        {texts.developedBy}&nbsp;
        <a href="https://github.com/JohnsCoder" target="_blank">
          JohnCoder
        </a>
      </footer>
    </div>
  );
}
