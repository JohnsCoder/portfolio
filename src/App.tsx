import "./App.css";
import InfoSection from "./components/infoSection";
import ProjectsSection from "./components/projectsSection";
import { ProjectProvider } from "./contexts/projects.context";

function App() {
  return (
    <div>
      <InfoSection />
      <ProjectProvider>
        <ProjectsSection />
      </ProjectProvider>
    </div>
  );
}

export default App;
