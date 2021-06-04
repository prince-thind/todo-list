import DOM from "./DOM.js";
import project from "./project.js";

const UI = (function () {
  function toggleHide(component) {
    component.classList.toggle("hidden");
  }
  function renderProjects() {
    DOM.projectBar.innerHTML = "";
    for (let p of project.projects) {
      const projectCell = document.createElement("div");
      projectCell.id = p.id;
      projectCell.classList.add("project-cell");
      DOM.projectBar.append(projectCell);
      projectCell.addEventListener("click", loadTasks);

      const projectText = document.createElement("div");
      projectText.innerText = p.name;
      projectCell.append(projectText);
      projectText.classList.add("project-text");

      const projectDelete = document.createElement("div");
      projectCell.append(projectDelete);
      projectDelete.innerText = "D";
      projectDelete.classList.add("project-delete");
      projectDelete.addEventListener("click", (e) => {
        project.deleteProject(e.id);
        renderProjects();
      });
    }
  }

  function loadTasks(event) {
    DOM.taskBar.innerHTML="";
    let obj = project.projects.find((project)=>{
      return event.target.id==project.id;
    })
    for(let task of obj.tasks){
      const taskCell = document.createElement("div");
      taskCell.classList.add("task-cell");
      DOM.taskBar.append(taskCell);

      const cellText = document.createElement("div");
      cellText.innerText = task;
      taskCell.append(cellText);
      cellText.classList.add("task-text");

      const taskDelete = document.createElement("div");
      taskCell.append(taskDelete);
      taskDelete.innerText = "Complete?";
      taskDelete.classList.add("task-delete");
      taskDelete.addEventListener("click", (event) => {
        //delete task code
      });
    }
  }

  return {
    toggleHide,
    renderProjects,
  };
})();

export default UI;
