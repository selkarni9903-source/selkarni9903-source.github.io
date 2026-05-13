const projects = [

    {
        title: "Jeu 2D en C++",
        description: "Jeu 2D orienté objet avec logique algorithmique et interaction utilisateur.",
        technologies: "C++",
        category: "cpp",
        link: "https://dounya.itch.io/game-2d-cachette"
    },

    {
        title: "Site de location de voitures de luxe",
        description: "Site web moderne avec design premium et interface fluide.",
        technologies: "HTML, CSS, JavaScript",
        category: "web",
        link: "https://hamzagabsi.github.io/LuxESTATTE-/"
    }

];

function ProjectCard(props){

    return(

        <div className={`project-card ${props.category}`}>

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <p className="tech">

                <strong>Technologies :</strong> {props.technologies}

            </p>

            <a
                href={props.link}
                target="_blank"
                className="project-link"
            >
                Accéder au projet
            </a>

        </div>

    );
}

function Projects(){

    return(

        <div className="projects-grid">

            {
                projects.map((project, index) => (

                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        category={project.category}
                        link={project.link}
                    />

                ))
            }

        </div>

    );

}

ReactDOM.createRoot(
    document.getElementById("projects-root")
).render(<Projects />);