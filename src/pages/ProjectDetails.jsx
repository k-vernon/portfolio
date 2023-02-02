import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation()

  return (
    <>
      <h1>{location.state.title}</h1>
      <p>{location.state.description}</p>
      <img style={{ width: 500 }} 
      src={location.state.image} 
      alt={location.state.title} />
      <div>
      <a href={location.state.deploymentLink}><button>View App</button></a>
      <a href={location.state.repositoryLink}><button>View Code</button></a>
      </div>

    </>
  )
}


export default ProjectDetails