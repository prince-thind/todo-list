import { useState, useEffect } from "react";
import firebase from "./firebase/firebaseConfig";
import { getFirebaseProjects, dbListner } from "./firebase/firestore";

import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";
import StatusBar from "./components/StatusBar";

function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    if (user) {
      getProjects(user);
      dbListner(user,setProjects);
    } else {
      setActiveProject(null);
      setProjects([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(()=>{
    if(projects && activeProject){
        const main=projects.find(proj=>{
      return proj.pid===activeProject.pid;
    })
    setActiveProject(main);
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projects])


  async function getProjects(user) {
    const projects = await getFirebaseProjects(user);
    setProjects(projects);
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">Todo List</h1>
        <StatusBar user={user} setUser={setUser} />
      </header>
      <main className="main">
        <ProjectList
          user={user}
          projects={projects}
          setActiveProject={setActiveProject}
          activeProject={activeProject}
        />
        <TaskList activeProject={activeProject} />
      </main>
      <footer className="footer">CopyRight &copy; Prince Thind</footer>
    </div>
  );
}

export default App;
