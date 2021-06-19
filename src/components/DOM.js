const DOM = (function () {
  function find(f) {
    return document.querySelector(f);
  }

  //tasks
  const addTaskButton = find("#add-task-button");
  const tasksContainer = find("#tasks");

  //projects
  const addProjectButton = find("#add-project-button");
  const projectsContainer = find("#projects");
  const defaultProjects = find("#project-default");

  //project menu
  const projectMenu = find("#add-project-menu");
  const projectName = find("#project-name-input");
  const projectAcceptButton = find("#project-accept-button");
  const projectCancelButton = find("#project-accept-cancel");

  //task menu
  const taskMenu = find("#add-task-menu");
  const taskName = find("#task-name");
  const taskDate = find("#task-date");
  const taskPriorityHigh = find("#button-high");
  const taskPriorityMedium = find("#button-medium");
  const taskPriorityLow = find("#button-low");
  const taskPriorityButtons=[...document.querySelectorAll(".priority-buttons input")];
  const taskDescription = find("#task-description");
  const taskAcceptButton = find("#task-accept-button");
  const taskCancelButton = find("#task-cancel-button");

  return {
    addTaskButton,
    tasksContainer,
    addProjectButton,
    projectsContainer,
    defaultProjects,
    projectMenu,
    projectName,
    projectAcceptButton,
    projectCancelButton,
    taskMenu,
    taskName,
    taskDate,
    taskDescription,
    taskAcceptButton,
    taskCancelButton,
    taskPriorityHigh,
    taskPriorityMedium,
    taskPriorityLow,
    taskPriorityButtons,
  };
})();


export default DOM;
