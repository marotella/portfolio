import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <hr class="border border-solid border-green my-2"></hr>

            <div className="p-2 flex text-lg items-center md:text-xl justify-between text-white">
                <Link className="pl-4 text-[500] hover:text-[600] hover:underline hover:underline-offset-8"to="/">Home</Link>
                <Link  className="text-[500] hover:text-[600] hover:underline hover:underline-offset-8" to="/about">About Me</Link>
                <img className="icon" src={process.env.PUBLIC_URL + "/M.png"} alt="project" />
                <Link className="text-[500] hover:text-[600] hover:underline hover:underline-offset-8" to="/contact">Contact</Link>
                <Link className="pr-4 text-[500] hover:text-[600] hover:underline hover:underline-offset-8" to="/projects">Projects</Link>
            </div>
        </footer>
    )
}
export default Footer