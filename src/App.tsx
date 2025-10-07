import "./App.css";
import InfoSection from "./components/infoSection";
import ProjectsSection from "./components/projectsSection";
import { ProjectProvider } from "./contexts/projects.context";
import { LanguageProvider } from "./contexts/language.context";

function App() {
  return (
    <LanguageProvider>
      <div>
        <InfoSection />
        <ProjectProvider>
          <ProjectsSection />
        </ProjectProvider>
      </div>
    </LanguageProvider>
  );
}

export default App;
