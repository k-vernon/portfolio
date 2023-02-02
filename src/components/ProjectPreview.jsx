import { Link } from "react-router-dom";

function ProjectPreview(props) {
  return (
    <div>
      <img style={{ width: 200 }}
        src={props.project.image} 
        alt={props.project.title} 
      />
      <section>
        <h3>{props.project.title}</h3>
        <Link to={"/projectdetails"} state={props.project}>
          <button> 
            Learn More 
          </button>
        </Link>
      </section>
    </div>
  )
}

export default ProjectPreview