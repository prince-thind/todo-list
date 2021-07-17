import firebase from "./firebaseConfig";
import "firebase/auth";

const gprovider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {
  return firebase
    .auth()
    .signInWithPopup(gprovider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      console.log(err);
    });
}

function googleSignOut() {
    return firebase.auth().signOut();
}

export  {googleSignIn,googleSignOut};
