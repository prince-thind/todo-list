import controller from "./controller.js";
import DOM from "./DOM";

const projectMenu = (function () {
  DOM.addProjectButton.addEventListener("click", () => {
    DOM.projectMenu.classList.toggle("hidden");
    controller.display();
  });

  DOM.projectAcceptButton.addEventListener("click", () => {
    DOM.projectMenu.classList.toggle("hidden");
    const projectName=DOM.projectName.value;
    controller.addProject(projectName)
    controller.display();
  });

  DOM.projectCancelButton.addEventListener("click", () => {
    DOM.projectMenu.classList.toggle("hidden");
    controller.display();
  });

  DOM.defaultProjects.addEventListener("click",()=>{
    controller.displayAll();
  })
})();

export default projectMenu;
