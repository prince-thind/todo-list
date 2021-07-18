import ProjectForm from './ProjectForm';

function ProjectList({ user,projects,activeProject, setActiveProject }) {
  if(user){
      return (
    <div className="project-tab">
      <div className="project-heading">Projects</div>
      <ul className="project-list">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </ul>
      <ProjectForm user={user}/>
    </div>
  );
  }
  else return null;


  function Project({ project }) {
    return (
      <li  className={activeProject?.pid===project.pid?'active':''}
        onClick={() => {
          setActiveProject(project);
        }}
        key={project.key}
      >
        {project.name}
      </li>
    );
  }
}
export default ProjectList;
