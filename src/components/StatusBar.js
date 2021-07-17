import { googleSignIn, googleSignOut } from "../firebase/authProvider";

function StatusBar({ user, setUser }) {
    
  return (
    <div className="status-bar">
      <Buttonaccount user={user} />
      <UserName user={user} />
    </div>
  );

  function Buttonaccount({user}) {
      console.log(user.uid);
    if (user) {
      return <button onClick={logout}>logout!</button>;
    } else {
      return <button onClick={login}>signin/login!</button>;
    }
  }

  function UserName({ user }) {
    if (!user) return <div>Sign in please!</div>;
    return <div>You are logged in as: {user.displayName}</div>;
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
