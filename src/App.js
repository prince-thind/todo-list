import { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import StatusBar from './components/StatusBar';

function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setUser(getLocalUser());
    setProjects(getProjects());
  }, []);


  function getLocalUser() {
    if (localStorage.hasOwnProperty('todo-user')) {
      return localStorage.getItem('todo-user');
    }
    return 'Guest';
  }

  function getProjects(user) {
    return [
      {
        name: 'proejct1',
        tasks: [
          { name: 't11', description: 'd11' },
          { name: 't12', description: 'd12' },
        ],
      },
      {
        name: 'proejct2',
        tasks: [
          { name: 't21', description: 'd21' },
          { name: 't22', description: 'd22' },
        ],
      },
      {
        name: 'proejct3',
        tasks: [
          { name: 't31', description: 'd31' },
          { name: 't32', description: 'd32' },
        ],
      },
    ];
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">Todo List</h1>
        <StatusBar user={user} setUser={setUser} />
      </header>
      <main className="main">
        <ProjectList
          projects={projects}
          setActiveProject={setActiveProject}
          activeProject={activeProject}
          setProjects={setProjects}
        />
        <TaskList
          activeProject={activeProject}
          projects={projects}
          setProjects={setProjects}
          setActiveProject={setActiveProject}

        />
      </main>
      <footer className="footer">CopyRight &copy; Prince Thind</footer>
    </div>
  );
}

export default App;
