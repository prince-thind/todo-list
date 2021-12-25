import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare as todoSymbol,
  faUser as userIcon,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getLocalUser());
  }, []);

  return (
    <header className="header">
      <h1 className="heading">
        <FontAwesomeIcon icon={todoSymbol} /> Todo List
      </h1>
      <StatusBar user={user} setUser={setUser} />
    </header>
  );
}

function StatusBar({ user, setUser }) {
  return (
    <div className="status-bar">
      <div className="username">
        <FontAwesomeIcon icon={userIcon} />
        {user}
      </div>
      <button className="button" onClick={editUser}>
        Edit
      </button>
    </div>
  );

  function editUser() {
    const newUser = prompt("enter the name of new user");
    if (newUser) {
      setUser(newUser);
      localStorage.setItem("todo-user", newUser);
    }
  }
}

function getLocalUser() {
  if (localStorage.hasOwnProperty("todo-user")) {
    return localStorage.getItem("todo-user");
  }
  return "Guest";
}
export default Header;
