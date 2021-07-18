import { db } from "../firebase/firestore";

function TaskForm({ activeProject, formActive, setFormActive }) {
  if (activeProject && formActive) {
    return <Form />;
  } else return null;

  function Form() {
    return (
      <form className="task-form" onSubmit={handletaskForm}>
        <label htmlFor="task-name">
          {" "}
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
          {" "}
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

    db.collection("tasks").add({
      name: form["task-name"].value,
      uid: activeProject.uid,
      pid: activeProject.pid,
      description: form["task-description"].value,
    });
    form.reset();
  }
}

export default TaskForm;
