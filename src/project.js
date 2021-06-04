let project = (function () {
  const projects = [];
  const projectFactory = function (name) {
    const project = {};
    project.name = name;
    project.tasks = [];
    project.id = null;
    return project;
  };
  const addProject = function (name) {
    projects.push(projectFactory(name));
  };
  const deleteProject = function (id) {
    const index = projects.findIndex((e) => {
      e.id == id;
    });
    projects.splice(index, 1);
  };

  return {addProject,deleteProject};
})();

export default project;
