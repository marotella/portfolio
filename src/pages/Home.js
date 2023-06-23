
function Home() {
    return (
        <main>
            <section>
                <div>
                    <h2>About Me</h2>
                    <p>I am a full-stack software engineer, with a passion for using technology to make hard work easier.</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/mrotella.jpeg"} alt="michelle" />
            </section>
            <div><h2>Projects</h2></div>
            <div><h2>Contact</h2></div>
        </main>
    )

}

export default Home