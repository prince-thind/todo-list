function ProjectList({ projects,setActiveProject }) {
  return (
    <ul className="project-list">
      {projects.map((project,index) => {
        return <li onClick={activateProject} key={project.key} data-key={index}>{project.name}</li>
      })}
    </ul>
  );

  function activateProject(e){
    setActiveProject(projects[e.target.getAttribute("data-key")])
    
  }
}
export default ProjectList;
