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
            <main className="m-2 flex flex-col">
            <div className="m-4 md:6 flex flex-col">
                <section className="m-4 md:m-6">
                    <div className="flex flex-col md:flex-row">
                    <div className="m-2 p-2">
                    <h1 className="text-2xl md:text-3x text-center">About me</h1>
                    <p>{about.bio}</p>
                    <p>Learn more about my experiences here.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                    </div>
                </section>
                <section className="m-4 md:m-6">
                    <h1 className="text-2xl md:text-3x text-center mb-4">Skills</h1>
                    <p className="text-center">You can see projects that demonstrate my skills here.</p>
                    <div className="flex md:flex-row flex-col justify-around  m-4 md:m-6">
                    <section className="text-center">
                        <p className="font-medium text-l md:text-xl">Tools</p>
                        <ul>
                            <li>Git</li>
                            <li>VSCode</li>
                            <li>GitHub</li>
                            <li>Trello</li>
                            <li>Asana</li>
                            <li>Heroku</li>
                        </ul>
                    </section>
                    <section className="text-center">
                        <p className="font-medium text-l md:text-xl">Languages</p>
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
                    <section className="text-center">
                        <p className="font-medium text-l md:text-xl">Libraries &Frameworks</p>
                        <ul>
                            <li>React</li>
                            <li>Flask</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </section>
                    </div>
                </section>
                
            </div>
            </main>
        )
    }
    return about ? loaded() : <h1>Loading...</h1>
}

export default About