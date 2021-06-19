let project = (function () {
  const projects = [];
  let id=0;
  const projectFactory = function (name) {
    const project = {};
    project.name = name;
    project.tasks = [];
    project.id = id++;
    project.active=false;
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

  
  return {addProject,deleteProject,projects};
})();

export default project;
