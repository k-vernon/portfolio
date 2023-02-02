import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation()

  return (
    <>
      <h1>{location.state.title}</h1>
      <p>{location.state.description}</p>
      <img style={{ width: 200 }} 
      src={location.state.image} 
      alt={location.state.title} />
      <div>
      <a href={location.state.repositoryLink}><button>Github Repo</button></a>
      <a href={location.state.deploymentLink}><button>Deployment Link</button></a>
      </div>

    </>
  )
}


export default ProjectDetails