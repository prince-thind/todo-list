import { useState } from "react";
import TaskForm from "./TaskForm";

function TaskList({ activeProject }) {
  const [formActive, setFormActive] = useState(false);

  if (activeProject) {
    return (
      <div className="task-bar">
        <List />
        <AddTaskButton formActive={formActive} />
        <TaskForm formActive={formActive} setFormActive={setFormActive} activeProject={activeProject} />
      </div>
    );
  } else {
    return null;
  }

  function List() {
    return (
      <ul className="task-list">
        {activeProject.tasks.map((task, index) => {
          return <li key={index}>{task.name}</li>;
        })}
      </ul>
    );
  }

  function AddTaskButton({ formActive }) {
    if (!formActive) {
      return (
        <button
          onClick={() => {
            setFormActive(true);
          }}
        >
          Add Task
        </button>
      );
    }
    else return null;
  }
}

export default TaskList;
