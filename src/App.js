import { useState, useEffect } from "react";

import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";
import StatusBar from "./components/StatusBar";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProject,setActiveProject]=useState(null);

  useEffect(() => {
    setProjects(getProjects());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  

  function getProjects() {
    return sampleProjects();
  }
  function sampleProjects() {
    return [
      {
        name: "project1",
        key:1,
        tasks: [{ name: "task1.1" }, { name: "task1.2" }],
      },
      {
        name: "project2",
        key:2,
        tasks: [{ name: "task2.1" }, { name: "task2.2" }],
      },
      {
        name: "project3",
        key:3,
        tasks: [{ name: "task3.1" }, { name: "task3.2" }],
      },
    ];
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">To-do</h1>
        <StatusBar />
      </header>
      <main>
        <ProjectList projects={projects} setActiveProject={setActiveProject}/>
        <TaskList activeProject={activeProject}  />
      </main>
      <footer className="footer">CopyRight &copy; Prince Thind</footer>
    </div>
  );
}

export default App;
