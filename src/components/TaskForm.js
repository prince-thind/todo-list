import _ from 'loadsh';

function TaskForm({
  activeProject,
  formActive,
  setFormActive,
  projects,
  setProjects,
  setActiveProject,
}) {
  if (activeProject && formActive) {
    return <Form />;
  } else return null;

  function Form() {
    return (
      <form className="task-form" onSubmit={handletaskForm}>
        <label htmlFor="task-name">
          {' '}
          Task Name
          <input
            type="text"
            name="task-name"
            id="task-name"
            required
            maxLength="20"
            minLength="2"
          />
        </label>
        <label htmlFor="task-description">
          {' '}
          Task Description
          <input
            type="text"
            name="task-description"
            id="task-description"
            maxLength="50"
            minLength="5"
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
        <button
          className="button"
          onClick={() => {
            setFormActive(false);
          }}
        >
          Close
        </button>
      </form>
    );
  }
  function handletaskForm(e) {
    e.preventDefault();
    setFormActive(false);
    const form = e.target;
    const task = {
      name: form['task-name'].value,
      description: form['task-description'].value,
    };
    addTask(activeProject, task);
    form.reset();
  }
  function addTask(targetProject, task) {
    const projectsCopy = _.cloneDeep(projects);
    const index = projects.indexOf(targetProject);
    projectsCopy[index].tasks.push(task);
    setProjects(projectsCopy);
    setActiveProject(projectsCopy[index]);

  }
}

export default TaskForm;
