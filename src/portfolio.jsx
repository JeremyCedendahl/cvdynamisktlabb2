import React, {useState, useEffect} from "react";
import './App.css';

const Portfolio = () => {
    const [project, setProjects] = useState([]);
    const [IsPending, setIsPending] = useState(true);


    useEffect(() =>{
        setTimeout(() => {
            fetch('https://api.github.com/users/JeremyCedendahl/repos')
            .then(res => res.json())
            .then(data => {
                const projectsData = data.slice(0, 2).map(project => ({
                    id: project.id,
                    name: project.name,
                    description: project.description,
                  }));
                  setProjects(projectsData);
                  setIsPending(false);
            });
        }, 3000)
    },[]);

return (
    <section className="github">
    <h1>GitHub</h1>
    <h3>Portfolio: </h3>
    <div>
    {IsPending && <div>Hämtar projekt från Github</div>}
      {project.map((names) => (
          <div key={names.name}>
          <p>Projekt Namn: {names.name}</p>
          <p>Beskrivning: {names.description}</p>
        </div>
      ))}
      {}
    </div>
  </section>
 )
}

export default Portfolio