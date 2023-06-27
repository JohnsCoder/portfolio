import { icons } from "../utils/icons";
import styles from "../styles/components/projectsSection.module.css";
import { useContext } from "react";
import Cards from "./cards";
import { ProjectContext } from "../contexts/projects.context";

export default function () {
  const { projects } = useContext(ProjectContext);

  return (
    <div className={styles["projects-section"]}>
      <h1>PROJECTS</h1>

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
        All Sites Developed by&nbsp;
        <a href="https://github.com/JohnsCoder" target="_blank">
          JohnCoder
        </a>
      </footer>
    </div>
  );
}
