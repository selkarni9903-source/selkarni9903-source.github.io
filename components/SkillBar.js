const skills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "75%" },
    { name: "JavaScript", level: "70%" },
    { name: "C", level: "75%" },
    { name: "C++", level: "80%" },
    { name: "Python", level: "75%" },
    { name: "SQL", level: "70%" }
];

function SkillBar(props){
    return(
        <div className="skill-card">
            <h3>{props.name}</h3>
            <div className="progress">
                <div
                    className="progress-bar"
                    data-width={props.level}
                ></div>
            </div>
        </div>
    );
}

function Skills(){
    return(
        <div className="skills-grid">
            {skills.map((skill, index)=>(
                <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                />
            ))}
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("skills-root")
).render(<Skills />);