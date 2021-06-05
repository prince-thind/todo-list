import DOM from "./DOM.js";
import UI from "./UI.js";
import project from "./project.js";

function init() {
  DOM.taskAdd.addEventListener("click", (e) => {
    UI.toggleHide(DOM.taskInterface);
  });
  DOM.projectAdd.addEventListener("click", (e) => {
    UI.toggleHide(DOM.projectInterface);
  });
  DOM.projectCancel.addEventListener("click", (e) => {
    UI.toggleHide(DOM.projectInterface);
  });

  DOM.taskCancel.addEventListener("click", (e) => {
    UI.toggleHide(DOM.taskInterface);
  });

  DOM.projectAccept.addEventListener("click",(e)=>{
      project.addProject(DOM.projectInput.value);
      UI.toggleHide(DOM.projectInterface);
      UI.renderProjects();
  })

  DOM.taskAccept.addEventListener("click",(e)=>{
    const activeProject=project.projects.find((project)=>{
      return project.active;
    })
    const taskName=DOM.taskInputName.value;
    activeProject.tasks.push(taskName);
    UI.toggleHide(DOM.taskInterface);
    UI.renderProjects();
})
}
export default init;
