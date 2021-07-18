import { googleSignIn, googleSignOut } from "../firebase/authProvider";

function StatusBar({ user, setUser }) {
    
  return (
    <div className="status-bar">
      <UserName user={user} />
      <Buttonaccount user={user} />
    </div>
  );

  function Buttonaccount({user}) {
    if (user) {
      return <button onClick={logout} className='logout-button button'>Logout</button>;
    } else {
      return <button onClick={login} className='login-button button'>Sign In</button>;
    }
  }

  function UserName({ user }) {
    if (!user) return <div>Sign In to use</div>;
    return <div className="username">{user.displayName}</div>;
  }
  async function login() {
    const user = await googleSignIn();
    setUser(user);
  }

  async function logout() {
    const user = await googleSignOut();
    setUser(user);
  }
}
export default StatusBar;
