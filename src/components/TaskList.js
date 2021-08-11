import { useState } from "react";
import TaskForm from "./TaskForm";
import _ from 'loadsh';

function TaskList({ activeProject, projects,setProjects,setActiveProject }) {
  const [formActive, setFormActive] = useState(false);

  if (activeProject) {
    return (
      <div className="task-tab">
        <div className="task-heading">Tasks</div>
        <List />
        <AddTaskButton formActive={formActive} />
        <TaskForm formActive={formActive} setFormActive={setFormActive} activeProject={activeProject} projects={projects}
          setActiveProject={setActiveProject}
          setProjects={setProjects}  />
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
          <span className="task-description">{task.description}</span>
          <DeleteIcon  task={task} /></li>;
        })}
      </ul>
    );

    function DeleteIcon({task}) {
      return (
        <span
          className="delete-icon"
          onClick={() => {
            deleteTask(activeProject,task);
          }}
        >
          X
        </span>
      );

     
  }
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
  function deleteTask(targetProject,targetTask){
  const projectsCopy = _.cloneDeep(projects);
  const index = projects.indexOf(targetProject);
  const taskIndex= projectsCopy[index].tasks.indexOf(targetTask);
  projectsCopy[index].tasks.splice(taskIndex,1);
  setProjects(projectsCopy);
  setActiveProject(projectsCopy[index]);
}
}



export default TaskList;
