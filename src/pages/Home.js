import { Link } from "react-router-dom"
import HeaderHome from "../components/headerHome"
function Home() {
    return (
        <main className="p-4 md:p-16 text-black grid grid-cols-1 gap-8 ">
            <div>
                <img className="w-full h-auto opacity-0 animate-fadeInFast" src={process.env.PUBLIC_URL + "/portfoliobanner.png"} alt="project" />
            </div>
            <HeaderHome />
            <section className="mb-4 flex-1 md:flex md:items-center opacity-0 animate-fadeIn md:flex-row md:mb-16">
                <div className="md:w-2/3 md:mr-8 md:text-right md:object-right p-4">
                    <h2 className="text-xl md:text-3xl mb-4 s:text-center font-[600]">About Me</h2>
                    <hr class="border border-dashed border-black my-4 fade-in-from-right"></hr>

                    <p className="mt-2 md:text-2xl font-[300] text-l md:text-right">Hi! I'm Michelle! I am a full-stack software engineer, with a passion for using technology to make hard work easier. Born and raised in Pittsburgh, but now call NYC home.</p>
                    <p className="mt-2 md:text-2xl text-lg md:text-right font-[400]">Learn more about my skills and experiences <Link className="font-[500] text-green hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:text-black" to="/about">here.</Link> </p>
                </div>
                <div className="md:w-1/3 object-right p-4">
                    <img className="w-full h-auto shadow-md shadow-black" src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                </div>
            </section>
            <section className="mb-6 md:flex flex-1 md:items-center md:flex-row md:mb-16 opacity-0 animate-fadeIn"
            >
                <div className="md:w-1/3 md:object-left p-4">
                    <img className="w-full h-auto shadow-md shadow-black" src={process.env.PUBLIC_URL + "/dinner.png"} alt="project" />
                </div>
                <div className="md:w-2/3 md:mr-8 md:object-left p-4">
                    <h2 className="text-xl md:text-3xl s:text-center mb-4 font-[600] ">Projects</h2>
                    <hr class="border border-dashed border-black my-4 fade-in-from-left"></hr>

                    <p className="mt-2 md:text-2xl font-[200] text-lg md:text-left">Learn more about my skills, and what I can offer by taking a look at some of my work! </p>
                    <p className="mt-2 md:text-2xl text-lg md:text-left font-[400]">View some of my recent projects  <Link className="font-[500] text-green hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:text-black" to="/projects">here</Link></p>
                </div>
            </section>
            <section className="mb-6 md:flex md:items-center md:flex-row md:mb-16 rounded-lg opacity-0 animate-fadeIn">
                <div className="md:mr-8 text-right p-4">
                    <h2 className="text-xl md:text-3xl s:text-center font-[600] mb-4">Contact</h2>
                    <hr class="border border-dashed border-black fade-in-from-right my-4"></hr>

                    <p className="mt-2 md:text-2xl text-lg md:text-right font-[200]">I know collaboration and feedback are key to delivering a great product. Let's make something great together!</p>
                    <p className="mt-2 md:text-2xl text-lg md:text-right font-[400]">Connect with me <Link className="font-[500] text-green hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:text-black" to="/contact">here</Link></p>
                </div>
                <div className="flex flex-col">
                    <Link to="https://github.com/marotella">
                        <button className="p-2 w-full bg-green m-4 border flex flex-row justify-center items-center shadow-md shadow-black"><p className="p-2 text-2xl">GitHub: </p> <img className="h-8" src={process.env.PUBLIC_URL + "/github.png"} alt="github" /></button>
                    </Link>
                    <Link to="https://github.com/marotella">
                        <button className="p-2 w-full bg-green m-4 border flex flex-row justify-center items-center shadow-md shadow-black"><p className="p-2 text-2xl">LinkedIn: </p> <img className="h-8" src={process.env.PUBLIC_URL + "/linkedin.png"} alt="github" /></button>
                    </Link>
                </div>
            </section>

        </main>
    )

}

export default Home