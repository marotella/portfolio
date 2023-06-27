import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <hr class="border border-solid border-green my-2"></hr>

            <div className="p-2 flex text-lg items-center md:text-xl justify-between text-white">
                <Link
                    to="/"
                    className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600] group relative"
                >
                    <span class="material-symbols-outlined md:text-4xl text-3xl">
                        home
                    </span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded">
                        Home
                    </span>
                </Link>
                <Link to="https://github.com/marotella">
                  <img className="h-8" src={process.env.PUBLIC_URL + "/github.png"} alt="github" />
                </Link>
                <img className="icon" src={process.env.PUBLIC_URL + "/M.png"} alt="project" />
                <Link to="https://www.linkedin.com/in/michelle-rotella/">
                  <img className="h-8" src={process.env.PUBLIC_URL + "/linkedin.png"} alt="github" />
                </Link>
                <Link
                    to="/contact"
                    className="block py-2 px-4 text-l md:text-2xl font-[500] hover:underline hover:underline-offset-4 md:hover:underline-offset-8 hover:font-[600] group relative"
                >
                    <span className="material-symbols-outlined md:text-4xl text-3xl">
                        mail
                    </span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded">
                        Contact
                    </span>
                </Link>
            </div>
        </footer>
    )
}
export default Footer