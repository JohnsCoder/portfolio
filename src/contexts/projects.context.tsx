import { ReactNode, createContext, useMemo, useState } from "react";
interface ProjectContextProvider {
  projects: Project[];
}
type Project = {
  index: number;
  name: string;
  description: string;
  homepage: string;
  language: string;
};
export const ProjectContext = createContext({} as ProjectContextProvider);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);

  const whiteList = [
    "hourlyBank-fe",
    "myTodo-frontend",
    "coin-converter",
    "GPTOChat",
    "Windows-Calc",
    "databasePeople-frontend",
  ];

  function selectProject(name: string) {
    for (let i = 0; i < whiteList.length; i++) {
      if (name === whiteList[i]) {
        return i;
      }
    }
  }

  useMemo(() => {
    fetch("https://api.github.com/users/JohnsCoder/repos")
      .then((response) => response.json())
      .then((data: Project[]) => {
        data.map((repository) =>
          setProjects(
            (repos) =>
              [
                ...repos,
                {
                  index: selectProject(repository.name) as number,
                  name: repository.name,
                  description: repository.description,
                  homepage: repository.homepage,
                  language: repository.language,
                },
              ].filter((e) => whiteList.includes(e.name))
                .sort((a, b) => a.index - b.index)
          )
        );
      })
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
