import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Header from "../components/header"
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
                <Header/>
            <div className="m-4 md:6 flex flex-col text-white">
                <section className="m-4 md:m-6 opacity-0 animate-fadeIn">
                    <div className="flex flex-col md:flex-row">
                    <div className="m-2 p-4">
                    <h2 className="text-2xl md:text-3xl font-[600] text-right">About me</h2>
                    <hr class="border border-solid border-white my-4"></hr>

                    <p className="md:text-2xl text-xl text-right">{about.bio}</p>
                    <p className="md:text-2xl text-xl text-right font-[600]">Learn more about my experiences <Link className="font-[600] text-green hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:text-white" to={about.resume}>here</Link>.</p>
                    </div>
                    <img className="shadow-md shadow-white"src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                    </div>
                </section>
                <section className="m-4 md:m-6 opacity-0 animate-fadeIn">
                    <h2 className="text-2xl md:text-3xl font-[600] text-left mb-4 ml-4">Skills</h2>
                    <hr class="border border-solid border-white my-4"></hr>
                    <div className="flex md:flex-row flex-col justify-around  m-4 md:m-6">
                    <section className="text-center md:text-left">
                        <p className="font-[500] text-xl md:text-2xl mb-4 underline underline-offset-8">Tools</p>
                        <ul className="text-center md:text-left"> 
                            <li className="mb-2 md:text-xl text-l">+ Git</li>
                            <li className="mb-2 md:text-xl text-l">+ VSCode</li>
                            <li className="mb-2 md:text-xl text-l">+ GitHub</li>
                            <li className="mb-2 md:text-xl text-l">+ Trello</li>
                            <li className="mb-2 md:text-xl text-l">+ Asana</li>
                            <li className="mb-2 md:text-xl text-l">+ Heroku</li>
                        </ul>
                    </section>
                    <section className="text-center">
                        <p className="font-[500] text-xl md:text-2xl mb-4 underline underline-offset-8">Languages</p>
                        <ul className="text-center md:text-left">
                            <li className="mb-2 md:text-xl text-l">+ JavaScript</li>
                            <li className="mb-2 md:text-xl text-l">+ Python</li>
                            <li className="mb-2 md:text-xl text-l">+ SQL</li>
                            <li className="mb-2 md:text-xl text-l">+ HTML</li>
                            <li className="mb-2 md:text-xl text-l">+ CSS</li>
                            <li className="mb-2 md:text-xl text-l">+ TypeScript</li>
                            <li className="mb-2 md:text-xl text-l">+ Express</li>
                            <li className="mb-2 md:text-xl text-l">+ Mongoose</li>
                        </ul>
                    </section>
                    <section className="text-center">
                        <p className="font-[500] text-xl md:text-2xl mb-4 underline underline-offset-8">Libraries & Frameworks</p>
                        <ul className="text-center md:text-left">
                            <li className="mb-2 md:text-xl text-l">+ React</li>
                            <li className="mb-2 md:text-xl text-l">+ Flask</li>
                            <li className="mb-2 md:text-xl text-l">+ PostgreSQL</li>
                            <li className="mb-2 md:text-xl text-l">+ MongoDB</li>
                            <li className="mb-2 md:text-xl text-l">+ TailwindCSS</li>
                        </ul>
                    </section>

                    </div>
                    <p className="text-center">You can see projects that demonstrate my skills here.</p>
                </section>
                
            </div>
            </main>
        )
    }
    return about ? loaded() : <h1>Loading...</h1>
}

export default About