import { useState, useEffect } from "react"


function Projects(props) {
        const [projects, setProjects] = useState(null)
        const getProjectsData = async () => {
            const response = await fetch(props.URL + "projects")
            const data = await response.json()
            console.log(data)
            setProjects(data)
        }

        useEffect(() => {
            getProjectsData()
        }, []
        )
        const loaded = () => {
            return projects.map((project) => (
              <div className="projectrow">
                <h3>Projects</h3>
                <p>As a junior developer these projects demonstrate my progress and skill as a developer.</p>
                <div className="projectDisplay">
                  <h1>{project.name}</h1>
                  <img src={project.image} />
                  <a href={project.git}>
                    <button>Github</button>
                  </a>
                  <a href={project.live}>Live Site</a>
                  <p>{project.type}</p>
                  <p>{project.description}</p>

                </div>
              </div>
            ))
          }
          return projects ? loaded() : <h1>Loading...</h1>
        }
        
        export default Projects;
        