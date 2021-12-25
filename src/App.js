import { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  useEffect(() => {
    const jsonProjects = JSON.stringify(projects);
    localStorage.setItem("todo-projects", jsonProjects);
  }, [projects]);

  function getProjects(user) {
    return sampleProjects();
    // const jsonProjects=localStorage.getItem('todo-projects');
    // return JSON.parse(jsonProjects);
  }

  return (
    <div className="App">
      <Header />

      <main className="main">
        <ProjectList
          projects={projects}
          setActiveProject={setActiveProject}
          activeProject={activeProject}
          setProjects={setProjects}
        />
        <TaskList
          activeProject={activeProject}
          projects={projects}
          setProjects={setProjects}
          setActiveProject={setActiveProject}
        />
      </main>
      <footer className="footer">CopyRight &copy; Prince Thind</footer>
    </div>
  );
}

export default App;

function sampleProjects() {
  return [
    {
      name: "proejct1",
      tasks: [
        { name: "t11", description: "d11" },
        { name: "t12", description: "d12" },
      ],
    },
    {
      name: "proejct2",
      tasks: [
        { name: "t21", description: "d21" },
        { name: "t22", description: "d22" },
      ],
    },
    {
      name: "proejct3",
      tasks: [
        { name: "t31", description: "d31" },
        { name: "t32", description: "d32" },
      ],
    },
  ];
}
