import DOM from "./DOM.js";
import taskMenu from "./taskMenu.js";
import projectMeny from "./projectMenu.js";

const controller = (function () {
  const projects = [];
  function display() {
    const active = getActiveProject();
    if (!active) {
      displayAll();
      return;
    }
    DOM.addTaskButton.style.display = "";
    displayProjects();
    displayTasks();
  }

  function displayProjects() {
    const projectBar = DOM.projectsContainer;
    projectBar.innerHTML = "";
    for (const project of projects) {
      let res = createProjectDiv(project, projects.indexOf(project));
      projectBar.append(res);
    }
  }

  function createProjectDiv(project, i) {
    const div = document.createElement("div");
    div.classList.add("project-cell");
    div.setAttribute("data-id", i);
    div.addEventListener("click", makeDivActive);

    const projectText = document.createElement("div");
    projectText.classList.add("project-text");
    projectText.innerText = project.name;

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("project-delete");
    deleteBtn.innerText = "D";
    deleteBtn.setAttribute("data-id", i);
    deleteBtn.addEventListener("click", deleteProject);

    div.append(projectText, deleteBtn);

    return div;
  }

  function makeDivActive(event) {
    projects.forEach((project) => {
      project.active = false;
    });
    const div = event.target;
    const index = div.getAttribute("data-id");

    projects[+index].active = true;
    display();
  }

  function deleteProject(event) {
    const deleteBtn = event.target;
    const index = deleteBtn.getAttribute("data-id");
    projects.splice(index, 1);
    display();
  }

  function deleteTask(event) {
    const deleteBtn = event.target;
    const index = deleteBtn.getAttribute("data-id");
    const activeProject = getActiveProject();
    activeProject.tasks.splice(index, 1);
    display();
  }

  function displayTasks() {
    const project = getActiveProject();

    const taskBar = DOM.tasksContainer;
    taskBar.innerHTML = "";

    for (const task of project.tasks) {
      const div = createTaskDiv(task.name, project.tasks.indexOf(task));
      taskBar.append(div);
    }
  }
  function createTaskDiv(name, i) {
    const div = document.createElement("div");
    div.classList.add("task-cell");
    div.setAttribute("data-id", i);

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerText = name;

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("task-delete");
    deleteBtn.innerText = "D";
    deleteBtn.setAttribute("data-id", i);
    deleteBtn.addEventListener("click", deleteTask);

    div.append(taskText, deleteBtn);

    return div;
  }

  function displayAll() {
    const taskBar = DOM.tasksContainer;
    taskBar.innerHTML = "";

    DOM.addTaskButton.style.display = "none";

    for (const project of projects) {
      for (const task of project.tasks) {
        const div = createTaskDiv(task.name, project.tasks.indexOf(task));
        taskBar.append(div);
      }
    }
  }

  function getActiveProject() {
    return projects.find((project) => {
      return project.active;
    });
  }

  function taskFactory(name, date, priority, description) {
    return { name, date, priority, description };
  }

  function addNewTask(name, date, description, priority) {
    const active = getActiveProject();
    const task = taskFactory(name, date, description, priority);
    active.tasks.push(task);
  }

  function addProject(name) {
    projects.forEach((project) => {
      project.active = false;
    });
    const project = projectFactory(name);
    projects.push(project);
    display();
  }

  function projectFactory(name) {
    let res = {};
    res.name = name;
    res.tasks = [];
    res.active = true;
    return res;
  }

  function addTask() {}

  return { addTask, addProject, display, addNewTask, displayAll };
})();

export default controller;
