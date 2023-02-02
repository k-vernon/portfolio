import projects from '../data/projects';
import ProjectList from '../components/ProjectList'

function Projects() {
  return (
    <>
      <div>
        <h1>Projects</h1>
        <ul>
          <ProjectList projects={projects} />
        </ul>
      </div>
    </>
  );
}

export default Projects
