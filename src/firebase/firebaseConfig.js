import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCM_iZWHxVRnSjxdXylvesnhzomhhsXZjY",
  authDomain: "todo-list-3499b.firebaseapp.com",
  projectId: "todo-list-3499b",
  storageBucket: "todo-list-3499b.appspot.com",
  messagingSenderId: "803768732603",
  appId: "1:803768732603:web:9c281ee0d7a0b9e270129e",
  measurementId: "G-VPH598KH3K",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
