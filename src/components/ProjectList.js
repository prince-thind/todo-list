import ProjectForm from "./ProjectForm";
import _ from 'loadsh';

function ProjectList({ projects, activeProject, setActiveProject , setProjects}) {
  return (
    <div className="project-tab">
      <div className="project-heading">Projects</div>
      <ul className="project-list">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </ul>
      <ProjectForm projects={projects} setProjects={setProjects}/>
    </div>
  );

  function Project({ project }) {
    return (
      <li
        className={activeProject === project ? 'active' : ''}
        onClick={() => {
          setActiveProject(project);
        }}
      >
        {project.name}
        <DeleteIcon project={project} />
      </li>
    );

    function DeleteIcon({ project }) {
      return (
        <span
          className="delete-icon"
          onClick={(e) => {
            e.stopPropagation();
            deleteProject(project);
          }}
        >
          X
        </span>
      );
    }
  }

  function deleteProject(project){
    const projectsCopy=_.cloneDeep(projects);
    const index=projects.indexOf(project);
    projectsCopy.splice(index,1);
    setProjects(projectsCopy);

  }
}
export default ProjectList;
