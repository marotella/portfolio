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

      <main className="flex flex-col text-white">
        <Header />
        <section className="mb-8 text-center">
        </section>
        {projects.map((project) => (
          <div key={project.id} className="projectrow mb-8 text-left opacity-0 animate-fadeIn">

            <div className="flex justify-center items-center flex-col md:flex-row">
              <div className="projectDisplay md:w-1/3 mb-4 md:mb-0">
                <div className=" flex items-center justify-center">
                  <img className="flex shadow-md shadow-white items-center pageimage justify-center" src={process.env.PUBLIC_URL + project.image} alt={project.name} />
                </div>
              </div>
              <div className="md:w-2/3 p-4">
                <h2 className=" text-3xl md:text-4xl font-[600]">{project.name}</h2>
                <hr class="border border-solid border-white my-4"></hr>
                <div className="justify-center items-center">
                <Link to={project.git}>
                  <button className="p-2 bg-green m-4 border"><img className="h-8" src={process.env.PUBLIC_URL + "/github.png"} alt="github" /></button>
                </Link>
                <Link to={project.live}>
                  <button className="p-2 items-center bg-green m-2 border hover:bg-white hover:text-green"><span className="material-symbols-outlined items-center text-2xl">
                    open_in_new
                  </span></button>
                </Link>
                </div>
                <p className="md:text-xl text-lg mb-4">Project Type: {project.type}</p>
                <p className="md:text-xl text-lg mb-4"> Technologies used: {project.technologies}</p>
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
