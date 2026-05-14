import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function ProjectBoard() {
  const [projectCollection, setProjectCollection] = useState([]);

  function registerProject(entry) {
    setProjectCollection([...projectCollection, entry]);
  }

  return (
    <div>
      <h1>Personal Project Showcase App</h1>
      <ProjectForm onRegister={registerProject} />
      <ProjectList items={projectCollection} />
    </div>
  );
}

export default ProjectBoard;