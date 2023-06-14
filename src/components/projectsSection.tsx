// import Cards from "./cards";
import { happyIcon, moveitIcon, reactIcon, viteIcon } from "./icons";
// import "../App.css";
import styles from "../styles/components/projectsSection.module.css";
import { useEffect, useMemo, useState } from "react";
import Cards from "./cards";
import { CardProvider } from "../contexts/cards.context";

type Repository = {
  name: string;
  description: string;
  homepage: string;
  language: string;
};

export default function () {
  const whiteList = [
    "coin-converter",
    "databasePeople-frontend",
    "GPTOChat",
    "myTodo-frontend",
    "Windows-Calc",
    "hourlyBank-fe",
  ];
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useMemo(() => {
    fetch("https://api.github.com/users/JohnsCoder/repos")
      .then((response) => response.json())
      .then((data: Repository[]) => {
        data.map((repository) =>
          setRepositories((repos) =>
            [
              ...repos,
              {
                name: repository.name,
                description: repository.description,
                homepage: repository.homepage,
                language: repository.language,
              },
            ].filter((e) => whiteList.includes(e.name))
          )
        );
      });
  }, []);
  return (
    <div className={styles["projects-section"]}>
      <h1>PROJECTS</h1>

      <div className={styles.cards}>
        <CardProvider>
          {repositories.map((element, index) => (
            <Cards
              key={index}
              icon={reactIcon}
              title={element.name}
              link={element.homepage}
              description={element.description}
              language={element.language}
            />
          ))}
        </CardProvider>
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
