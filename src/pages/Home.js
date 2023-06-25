import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="p-4 sm:p-8 md:p-16">
            <section className="mb-8 md:flex md:items-center md:flex-row md:mb-16">
                <div className="md:w-2/3 md:mr-8 md:bject-right">
                    <h2 className="text-xl md:text-3xl md:text-right">About Me</h2>
                    <p className="mt-2 md:text-lg md:text-right"> I am a full-stack software engineer, with a passion for using technology to make hard work easier. Born and raised in Pittsbugh, but now call NYC home.
                    Learn more about my skills and experiences <Link to="/about">here.</Link> </p>
                </div>
                <div className="md:w-1/3 object-right p-4">
                <img  className="w-full h-auto" src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                </div>
            </section>
            <section className="mb-8 md:flex md:items-center md:flex-row md:mb-16">
            <div className="md:w-1/3 md:object-left">
                <img  className="w-full h-auto" src={process.env.PUBLIC_URL + "/dinner.png"} alt="project" />
                </div>
                <div className="md:w-2/3 md:mr-8 md:object-left">
                <h2 className="text-xl md:text-3xl md:text-left p-4">Projects</h2>
                    <p className="mt-2 md:text-lg md:text-left">Learn more about my skills and what I can offer by taking a look at some of my work! Linked <Link to="/projects">here</Link> are some recent solo and group projects.</p>
                </div>
                </section>
            <section  className="mb-8 md:flex md:items-center md:flex-row md:mb-16">
                <div className="md:mr-8 text-center">
                <h2 className="text-xl md:text-3xl">Contact</h2>
                <p >I know collaboration and feedback are key to delivering a great product. If you want to connect, you can do so <Link to="/contact">here</Link>. Let's make something great together!</p>
                </div>
            </section>
        </main>
    )

}

export default Home