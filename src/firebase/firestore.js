import firebase from "./firebaseConfig";
import "firebase/firestore";

const db = firebase.firestore();

let projects = [];

async function getFirebaseProjects(user) {
  projects = [];

  const projectNamesaAdID = await getProjectNameAndID(user);
  const tasks = await getTasks(projectNamesaAdID, user);

  projects = processRawData(projectNamesaAdID, tasks);

  return projects;
}

function processRawData(projects, tasks) {
  const arr = [];
  projects.forEach((project) => {
    arr.push({
      name: project.name,
      pid: project.pid,
      uid: project.uid,
      tasks: tasks.filter((task) => {
        return project.pid === task.pid;
      }),
    });
  });

  return arr;
}

async function getProjectNameAndID(user) {
  const projectSnapshot = await db
    .collection("projects")
    .where("uid", "==", user.uid)
    .get();
  const docs = projectSnapshot.docs;
  const arr = [];
  docs.forEach((doc) => {
    const data = doc.data();
    arr.push({
      name: data.name,
      pid: data.pid,
      uid: data.uid,
    });
  });
  return arr;
}

async function getTasks(projectsWithPIDS, user) {
  const taskSnapshot = await db
    .collection("tasks")
    .where("uid", "==", user.uid)
    .get();

  const docs = taskSnapshot.docs;
  const arr = [];

  docs.forEach((doc) => {
    const data = doc.data();
    arr.push({
      name: data.name,
      pid: data.pid,
      uid: data.uid,
      description: data.description,
    });
  });
  return arr;
}

function dbListner(user, setProjects) {
  db.collection("projects")
    .where("uid", "==", user.uid)
    .onSnapshot(() => {
      getFirebaseProjects(user).then((res) => {
        setProjects(res);
      });
    });

  db.collection("tasks")
    .where("uid", "==", user.uid)
    .onSnapshot(() => {
      getFirebaseProjects(user).then((res) => {
        setProjects(res);
      });
    });
}

export { db, dbListner, getFirebaseProjects };
