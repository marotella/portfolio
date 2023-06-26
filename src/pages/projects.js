import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header"

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

      <main className="m-2 flex flex-col text-white">
        <Header />
        <section className="mb-8 text-center">
          <h3 className="text-2xl">Projects</h3>
          <p>As a junior developer, these projects demonstrate my progress and skills.</p>
        </section>
        {projects.map((project) => (
          <div key={project.id} className="projectrow mb-8 text-left opacity-0 animate-fadeIn">

            <div className="flex flex-col md:flex-row">
              <div className="projectDisplay md:w-1/3 mb-4 md:mb-0">
              <div className=" flex items-center justify-center">
                <img className="flex shadow-md shadow-white items-center pageimage justify-center" src={process.env.PUBLIC_URL + project.image} alt={project.name} />
                </div>
              </div>
              <div className="md:w-2/3 p-4">
                <h2 className=" text-3xl md:text-4xl font-[600]">{project.name}</h2>
                <hr class="border border-solid border-white my-4"></hr>
                <Link to={project.git}>
                  <button className="p-4">Github</button>
                </Link>
                <Link to={project.live}>
                  <button className="p-4">Live Site</button>
                </Link>
                <p className="md:text-xl text-lg mb-4">Project Type: {project.type}</p>
                <p className="md:text-xl text-lg">{project.description}</p>
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
