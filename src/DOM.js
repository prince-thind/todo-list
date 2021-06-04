const DOM = (function () {
  const taskAdd = find(".add-task-button");
  const projectAdd = find(".add-project-button");
  const taskInterface = find(".task-add");
  const projectInterface = find(".add-project");
  const taskDeleteInterface = find(".task-delete");
  const projectDeleteInterface = find(".project-delete");
  const taskBar = find(".tasks");
  const projectBar = find(".list");
  const projectAccept = find(".project-accept");
  const projectInput = find("#project-name");
  const projectCancel = find(".project-cancel");
  const projectDeleteAccept = find(".project-delete-accept");
  const projectDeleteCancel = find(".project-delete-cancel");
  const markCompleteAccept = find(".mark-complete");
  const markCompleteCancel = find(".mark-complete-cancel");
  const taskAccept = find(".task-accept");
  const taskCancel = find(".task-cancel");
  const taskInputName = find("#task-name");
  const taskInputDate = find("#task-date");
  const taskInputPriority = find("#task-priority");
  const taskInputDescription = find("#task-para");

  function find(f) {
    return document.querySelector(f);
  }
  return {
    taskAdd,
    projectAdd,
    taskDeleteInterface,
    taskInterface,
    projectDeleteInterface,
    projectInterface,
    taskBar,
    projectBar,
    projectAccept,
    projectInput,
    projectCancel,
    projectDeleteAccept,
    projectDeleteCancel,
    markCompleteAccept,
    markCompleteCancel,
    taskAccept,
    taskCancel,
    taskInputDate,
    taskInputName,
    taskInputPriority,
    taskInputDescription,
  };
})();

export default DOM;
