import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="p-4 sm:p-8 md:p-16">
            <section className="mb-8 md:flex md:items-center md:flex-row md:mb-16">
                <div className="md:w-1/2 md:mr-8">
                    <h2 className="text-xl md:text-3xl">About Me</h2>
                    <p className="mt-2 md:text-lg"> I am a full-stack software engineer, with a passion for using technology to make hard work easier. Born and raised in Pittsbugh, but now call NYC home.</p>
                    <p>Learn more about my skills and experiences </p><Link to="/about">here.</Link>
                </div>
                <div className="md:w-1/2">
                <img  className="w-full h-auto" src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
                </div>
            </section>
            <section><h2>Projects</h2></section>
            <section><h2>Contact</h2></section>
        </main>
    )

}

export default Home