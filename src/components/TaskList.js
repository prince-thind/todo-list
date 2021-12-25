import { useState } from "react";
import TaskForm from "./TaskForm";
import _ from "loadsh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt as deleteIcon } from "@fortawesome/free-solid-svg-icons";

function TaskList({ activeProject, projects, setProjects, setActiveProject }) {
  const [formActive, setFormActive] = useState(false);

  if (activeProject) {
    return (
      <div className="tasks-section">
        <div className="tasks-heading">Tasks</div>
        <List />
        <AddTaskButton formActive={formActive} />
        <TaskForm
          formActive={formActive}
          setFormActive={setFormActive}
          activeProject={activeProject}
          projects={projects}
          setActiveProject={setActiveProject}
          setProjects={setProjects}
        />
      </div>
    );
  } else {
    return null;
  }

  function List() {
    return (
      <ul className="tasks-list">
        {activeProject.tasks.map((task, index) => {
          return (
            <li key={index} className="task">
              {task.name}
              <p className="task-description">{task.description}</p>
              <DeleteButton task={task} />
            </li>
          );
        })}
      </ul>
    );

    function DeleteButton({ task }) {
      return (
        <span
          className="task-delete-icon"
          onClick={() => {
            deleteTask(activeProject, task);
          }}
        >
          <FontAwesomeIcon icon={deleteIcon} />
        </span>
      );
    }
  }

  function AddTaskButton({ formActive }) {
    if (!formActive) {
      return (
        <button
          className="button task-button"
          onClick={() => {
            setFormActive(true);
          }}
        >
          Add Task
        </button>
      );
    } else return null;
  }
  function deleteTask(targetProject, targetTask) {
    const projectsCopy = _.cloneDeep(projects);
    const index = projects.indexOf(targetProject);
    const taskIndex = projectsCopy[index].tasks.indexOf(targetTask);
    projectsCopy[index].tasks.splice(taskIndex, 1);
    setProjects(projectsCopy);
    setActiveProject(projectsCopy[index]);
  }
}

export default TaskList;
