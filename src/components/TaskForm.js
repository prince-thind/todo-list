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
        <button type="submit">submit</button>
        <button
          onClick={() => {
            setFormActive(false);
          }}
        >
          close
        </button>
      </form>
    );
  }
  function handletaskForm(e) {
    e.preventDefault();
    setFormActive(false);
    const form = e.target;
    console.log({activeProject});

    db.collection("tasks").add({
      name: form["task-name"].value,
      uid: activeProject.uid,
      pid: activeProject.pid,
    });
    form.reset();
  }
}

export default TaskForm;
