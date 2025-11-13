import { projects } from "../data/projects"

export default function MyWorks() {
    return (
        <>
            <div className="grid-layout">
                {projects.map(({ id, image, description, link, title }) => (
                    <div className="project-card" key={id}>
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={image} alt={title} />
                            </div>
                            <div className="card-back">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    Переглянути
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}