import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <h1>Michelle Rotella</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </header>
    )
}
export default Header