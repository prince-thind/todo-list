import controller from "./controller.js";
import DOM from "./DOM";

const taskMenu = (function () {
  DOM.taskAcceptButton.addEventListener("click", (e) => {
    const name = DOM.taskName.value;
    const date = DOM.taskDate.value;
    const description = DOM.taskDescription.value;
    const priority = DOM.taskPriorityButtons.find((button) => {
      return button.checked == true;
    }).value;
    
    DOM.taskMenu.classList.toggle("hidden");
    controller.addNewTask(name, date, description, priority);
    controller.display();
  });

  DOM.addTaskButton.addEventListener("click", () => {
    DOM.taskMenu.classList.toggle("hidden");
    controller.display();
  });


  DOM.taskCancelButton.addEventListener("click", () => {
    DOM.taskMenu.classList.toggle("hidden");
    controller.display();
  });
  
})();

export default taskMenu;
