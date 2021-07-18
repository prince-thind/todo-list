import { db } from "../firebase/firestore";
import uniqid from 'uniqid';

function ProjectForm({ user }) {
  return (
    <form className="project-form" onSubmit={handleProjectForm}>
      <label htmlFor="project-name">
        <input
          type="text"
          name="project-name"
          id="project-name"
          required
          maxLength="20"
          minLength="2"
        />
      </label>
      <button type="submit">Add Project</button>
    </form>
  );

  function handleProjectForm(e) {
    e.preventDefault();
    const form = e.target;
    db.collection("projects").add({
      name: form["project-name"].value,
      uid: user.uid,
      pid: uniqid(),
    });
    form.reset();
  }
}

export default ProjectForm;
