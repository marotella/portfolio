import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </footer>
    )
}
export default Footer