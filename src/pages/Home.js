import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="p-4 sm:p-8 md:p-16 text-white grid grid-cols-1 gap-8 ">

                <section className="mb-8 flex-1 md:flex md:items-center rounded-lg md:flex-row md:mb-16">
                    <div className="md:w-2/3 md:mr-8 md:text-right md:object-right p-4">
                        <h2 className="text-xl md:text-3xl mb-4 s:text-center font-[600]">About Me</h2>
                        <hr class="border border-solid border-white my-4"></hr>

                        <p className="mt-2 md:text-lg md:text-right"> I am a full-stack software engineer, with a passion for using technology to make hard work easier. Born and raised in Pittsbugh, but now call NYC home.</p>
                        <p>
                            Learn more about my skills and experiences <Link to="/about">here.</Link> </p>
                    </div>
                    <div className="md:w-1/3 object-right p-4">
                        <img className="w-full h-auto shadow-md shadow-white" src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                    </div>
                </section>
                <section className="mb-8 md:flex flex-1 md:items-center md:flex-row md:mb-16"
                >
                    <div className="md:w-1/3 md:object-left p-4">
                        <img className="w-full h-auto shadow-md shadow-white" src={process.env.PUBLIC_URL + "/dinner.png"} alt="project" />
                    </div>
                    <div className="md:w-2/3 md:mr-8 md:object-left p-4">
                        <h2 className="text-xl md:text-3xl s:text-center mb-4 font-[600] text-white ">Projects</h2>
                        <hr class="border border-solid border-white my-4"></hr>

                        <p className="mt-2 md:text-lg md:text-left">Learn more about my skills and what I can offer by taking a look at some of my work! </p>
                        <p>Linked <Link to="/projects">here</Link> are some recent solo and group projects.</p>
                    </div>
                </section>
                <section className="mb-8 md:flex md:items-center md:flex-row md:mb-16 rounded-lg">
                    <div className="md:mr-8 text-right p-4 w-2/3">
                        <h2 className="text-xl md:text-3xl s:text-center font-[600] mb-4">Contact</h2>
                        <hr class="border border-solid border-white my-4"></hr>

                        <p >I know collaboration and feedback are key to delivering a great product. If you want to connect, you can do so <Link to="/contact">here</Link>. Let's make something great together!</p>
                    </div>
                </section>

        </main>
    )

}

export default Home