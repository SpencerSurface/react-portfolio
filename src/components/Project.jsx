export default function Project({ imgSrc, imgAlt, title, repoLink, deployedLink, tech }) {
    return (
        <div className="project">
            <img src={imgSrc} alt={imgAlt}></img>
            <a href={deployedLink}>
                <h3>{title}</h3>
            </a>
            <a href={repoLink}>
                <img src="github logo" alt="GitHub logo"></img>
            </a>
            <p>{tech}</p>
        </div>
    )
}