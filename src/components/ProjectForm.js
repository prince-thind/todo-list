import _ from 'loadsh';

function ProjectForm({ projects,setProjects }) {
  return (
    <form className="project-form" onSubmit={handleProjectForm}>
      <label htmlFor="project-name">
        <input
          type="text"
          name="project-name"
          id="project-name"
          required
          maxLength="20"
          minLength="2"
          placeholder="Project Name"
        />
      </label>
      <button type="submit" className="button project-button">
        Add Project
      </button>
    </form>
  );

  function handleProjectForm(e) {
    e.preventDefault();
    const form = e.target;
    const project={};
    project.name=form['project-name'].value;
    project.tasks=[];

    const projectsCopy=_.cloneDeep(projects);
    projectsCopy.push(project);
    setProjects(projectsCopy);
    form.reset();
  }
}

export default ProjectForm;
