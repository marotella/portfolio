import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <hr class="border border-solid border-white my-4"></hr>

            <div className="p-6 flex justify-between text-white">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </footer>
    )
}
export default Footer