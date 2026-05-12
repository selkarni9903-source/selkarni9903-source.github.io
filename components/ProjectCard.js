const projects = [

    {
        title:"Jeu 2D en C++",
        description:"Jeu 2D orienté objet avec logique algorithmique et interaction utilisateur.",
        technologies:"C++",
        category:"cpp"
    },

    {
        title:"Site de location de voitures de luxe",
        description:"Site web moderne avec design premium et interface fluide.",
        technologies:"HTML CSS JavaScript",
        category:"web"
    }

];

function ProjectCard(props){

    return(

        <div className={`project-card ${props.category}`}>

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <p className="tech">

                <strong>Technologies :</strong>
                {props.technologies}

            </p>

        </div>
    );
}

function Projects(){

    return(

        <div className="projects-grid">

            {
                projects.map((project,index)=>(

                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        category={project.category}
                    />

                ))
            }

        </div>
    );
}

ReactDOM.createRoot(
document.getElementById("projects-root")
).render(<Projects />);