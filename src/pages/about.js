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
            <main className=" flex flex-col">
                <Header/>
            <div className="m-4 md:6 flex flex-col text-black">
                <section className="m-4 md:m-8 opacity-0 animate-fadeIn">
                    <div className="flex flex-col md:flex-row">
                    <div className="m-2 md:w-2/3 p-4">
                    <h2 className="text-2xl md:text-3xl font-[600] text-right">About me</h2>
                    <hr class="border border-dashed border-black my-4 fade-in-from-left"></hr>
                    <p className="md:text-lg text-md text-right font-[200]">{about.bio}</p>
                    <p className="md:text-xl text-lg text-right font-[400]">Learn more about my experiences <Link className="font-[500] text-green hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:text-white" to={about.resume}>here</Link>.</p>
                    </div>
                    <div className="md:w-1/3 object-right p-4 flex items-center">
                        <img className="w-full h-auto shadow-md shadow-black" src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                    </div>
                    </div>
                </section>
                <section className="m-4 md:m-8 opacity-0 animate-fadeIn">
                    <h2 className="text-2xl md:text-3xl font-[600] text-left mb-4 ml-4">Skills</h2>
                    <hr class="border border-dashed border-black my-4 fade-in-from-left"></hr>
                    <div className="flex md:flex-row flex-col justify-around  m-4 md:m-6">
                    <section className="text-center md:text-left">
                        <p className="font-[400] text-green text-xl md:text-2xl mb-4 underline underline-offset-8">Tools</p>
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
                        <p className="font-[400] text-xl md:text-2xl mb-4 underline underline-offset-8 text-green">Languages</p>
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
                        <p className="font-[400] text-xl md:text-2xl text-green mb-4 underline underline-offset-8">Libraries & Frameworks</p>
                        <ul className="text-center md:text-left text-[200]">
                            <li className="mb-2 md:text-xl text-l ">+ React</li>
                            <li className="mb-2 md:text-xl text-l">+ Flask</li>
                            <li className="mb-2 md:text-xl text-l">+ PostgreSQL</li>
                            <li className="mb-2 md:text-xl text-l">+ MongoDB</li>
                            <li className="mb-2 md:text-xl text-l">+ TailwindCSS</li>
                        </ul>
                    </section>

                    </div>
                    <p className="text-center">Check out my skills in action <Link to="/projects" className="text-green hover:font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 ">here</Link></p>
                </section>
                
            </div>
            </main>
        )
    }
    return about ? loaded() : <h1>Loading...</h1>
}

export default About