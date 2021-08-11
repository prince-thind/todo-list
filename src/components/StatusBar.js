function StatusBar({ user, setUser }) {
  return (
    <div className="status-bar">
      <div className="username">{user}</div>
      <button className="edit" onClick={editUser}>Edit</button>
    </div>
  );

  function editUser() {
    const newUser=prompt('enter the name of new user');
    if(newUser){
      setUser(newUser);
      localStorage.setItem('todo-user',newUser);
    }
  }
}
export default StatusBar;
