import { useState, useEffect } from "react";
import firebase from "./firebase/firebaseConfig";
import { getFirebaseProjects } from "./firebase/firestore";

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
    } else {
      setActiveProject(null);
      setProjects([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function getProjects(user) {
   const projects= await getFirebaseProjects(user);
   setProjects(projects);
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">To-do</h1>
        <StatusBar user={user} setUser={setUser} />
      </header>
      <main>
        <ProjectList
          user={user}
          projects={projects}
          setActiveProject={setActiveProject}
        />
        <TaskList activeProject={activeProject} />
      </main>
      <footer className="footer">CopyRight &copy; Prince Thind</footer>
    </div>
  );
}

export default App;
