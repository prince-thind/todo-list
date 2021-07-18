import ProjectForm from './ProjectForm';

function ProjectList({ user,projects, setActiveProject }) {
  if(user){
      return (
    <div className="project-tab">
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
      <li
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
