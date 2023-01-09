import Cards from "./components/cards";
import { happyIcon, moveitIcon, reactIcon, viteIcon } from "./components/icons";
import "./App.css";
import { useEffect, useMemo, useState } from "react";

type Repository = {
  name: string;
  description: string;
  homepage: string;
  language: string;
};
function App() {
  const whiteList = [
    "coin-converter",
    "databasePeople-frontend",
    "GPTOChat",
    "myTodo-frontend",
    "Windows-Calc",
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
    <div className="container">
      <h1>
        <span>{"<H1>"}</span>&nbsp;Hi, I am João, and this is my portfolio.&nbsp;
        <span>{"<H1>"}</span>
      </h1>

      <div className="homepage">
        <div className="cards">
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
        </div>
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

export default App;
