import ProjectForm from "./ProjectForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl as projectsHeadingIcon,
  faTrashAlt as deleteIcon,
} from "@fortawesome/free-solid-svg-icons";

import _ from "loadsh";

function ProjectList({ projects, setProjects }) {
  return (
    <section className="project-section">
      <div className="projects-heading">
        <FontAwesomeIcon icon={projectsHeadingIcon} /> Projects
      </div>
      <ul className="project-list">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </ul>
      <ProjectForm projects={projects} setProjects={setProjects} />
    </section>
  );

  function Project({ project }) {
    return (
      <li
        className={"project-item " + (project.active ? "active" : "")}
        onClick={() => {
          makeProjectActive(project);
        }}
      >
        <div>{project.name}</div>
        <DeleteIcon project={project} />
      </li>
    );

    function DeleteIcon({ project }) {
      return (
        <div
          className="delete-icon"
          onClick={(e) => {
            e.stopPropagation();
            deleteProject(project);
          }}
        >
          <FontAwesomeIcon icon={deleteIcon} />
        </div>
      );
    }
  }

  function deleteProject(project) {
    const projectsCopy = _.cloneDeep(projects);
    const index = projects.indexOf(project);
    projectsCopy.splice(index, 1);
    setProjects(projectsCopy);
  }

  function makeProjectActive(project) {
    const projectsCopy = _.cloneDeep(projects);
    const index = projects.indexOf(project);
    projectsCopy.forEach((p) => (p.active = false));
    projectsCopy[index].active = true;
    setProjects(projectsCopy);
  }
}

export default ProjectList;
