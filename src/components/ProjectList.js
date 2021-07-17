function ProjectList({ projects,setActiveProject }) {
  return (
    <ul className="project-list">
      {projects.map((project,index) => {
          return <Project project={project} key={index}/>
      })}
    </ul>
  );

  function Project({project}) {
    return <li onClick={()=>{setActiveProject(project)}} key={project.key}>{project.name}</li>
      
  }
}
export default ProjectList;
