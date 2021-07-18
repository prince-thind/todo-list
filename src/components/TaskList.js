import { useState } from "react";
import TaskForm from "./TaskForm";

function TaskList({ activeProject }) {
  const [formActive, setFormActive] = useState(false);

  if (activeProject) {
    return (
      <div className="task-tab">
        <div className="task-heading">Tasks</div>
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
          return <li key={index}>{task.name}
          <span className="task-description">{task.description}</span></li>;
        })}
      </ul>
    );
  }

  function AddTaskButton({ formActive }) {
    if (!formActive) {
      return (
        <button
        className='button'
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
