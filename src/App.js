import { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import * as faker from "faker";
import uniqid from "uniqid";

function App() {
  const [projects, setProjects] = useState([]);

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
        <ProjectList projects={projects} setProjects={setProjects} />
        <TaskList projects={projects} setProjects={setProjects} />
      </main>
      <footer className="footer">CopyRight &copy; Prince Thind</footer>
    </div>
  );
}

export default App;

function sampleProjects() {
  const projects = [];

  for (let i = 0; i < 3; i++) {
    const project = {};
    project.name = `Sample Project ${i + 1}`;
    project.id = uniqid();
    project.active = false;
    const tasks = [];
    for (let i = 0; i < 2; i++) {
      const task = {};
      task.name = faker.commerce.product();
      task.description = faker.lorem.lines(10);
      tasks.push(task);
    }
    project.tasks = tasks;
    projects.push(project);
  }

  return projects;
}
