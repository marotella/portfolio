import { useState, useEffect } from "react"

function About(props) {
    const [about, setAbout] = useState(null)
    const getAboutData = async () => {
        const response = await fetch(props.URL + "about")
        const data = await response.json()
        console.log(data)
        setAbout(data)

    }
    useEffect(() => {
        getAboutData()
    }, []
    )
    const loaded = () => {
        return (
            <div>
                <section>
                    <h3>{about.name}</h3>
                    <p>{about.bio}</p>
                    <img src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                    
                    <p>Learn more about my experiences here.</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <p>You can see projects that demonstrate my skills here.</p>
                    <section>
                        <p>Tools</p>
                        <ul>
                            <li>Git</li>
                            <li>VSCode</li>
                            <li>GitHub</li>
                            <li>Trello</li>
                            <li>Asana</li>
                            <li>Heroku</li>
                        </ul>
                    </section>
                    <section>
                        <p>Languages</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                        </ul>
                    </section>
                    <section>
                        <p>Libraries and Frameworks</p>
                        <ul>
                            <li>React</li>
                            <li>Flask</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </section>
                </section>
            </div>
        )
    }
    return about ? loaded() : <h1>Loading...</h1>
}

export default About