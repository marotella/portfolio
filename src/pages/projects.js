import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects(props) {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return (
      <main className="p-4 sm:p-8 md:p-16  flex flex-col items-center justify-center text-white">
        <section className="mb-8 text-center">
          <h3 className="text-2xl">Projects</h3>
          <p>As a junior developer, these projects demonstrate my progress and skills.</p>
        </section>
        {projects.map((project) => (
          <div key={project.id} className="projectrow mb-8 text-left">
        
            <div className="flex flex-col md:flex-row">
              <div className="projectDisplay md:w-1/3 mb-4 md:mb-0">
                <img className="shadow-xl" src={process.env.PUBLIC_URL + project.image} alt={project.name} />
              </div>
              <div className="md:w-2/3 p-4">
                <h1 className="text-2xl font-[600]">{project.name}</h1>
                <hr class="border border-solid border-white my-4"></hr>
                <Link to={project.git}>
                  <button>Github</button>
                </Link>
                <Link to={project.live}>
                  <button>Live Site</button>
                </Link>
                <p>Project Type: {project.type}</p>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
