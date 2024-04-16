import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="p-3">
            <div className="col d-flex flex-row justify-content-center">
                <a className="icon mx-4" href="https://www.linkedin.com/in/spencersurface/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="icon mx-4" href="https://github.com/SpencerSurface">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="icon mx-4" href="mailto:spencer.surface@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </footer>
    );
}

export default Footer
