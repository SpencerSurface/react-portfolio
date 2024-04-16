// Import statements for the GitHub icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Component for the Portfolio page. Displays a single project being showcased.
// imgSrc is the source of the project's screenshot
// imgAlt is the description of the project's screenshot
// title is the name of the project
// repoLink is the URL of the project's repo
// deployedLink is the URL of the deployed project
// tech is a short description of the tech stack used for the project
export default function Project({ imgSrc, imgAlt, title, repoLink, deployedLink, tech }) {
    return (
        <div className="project col-lg-6">
            <div className="card mb-4">
                <img className="card-img" src={imgSrc} alt={imgAlt}></img>
                <div className="card-img-overlay">  
                    <div className="d-flex">
                        <a href={deployedLink}>
                            <h3>{title}</h3>
                        </a>
                        <a className="ms-3 icon" href={repoLink}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <p>{tech}</p>
                </div>
            </div>
        </div>
    )
}