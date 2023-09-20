import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar" >
            <span className="navButtonBorderLeft"><Link className="link" to="/experience">Experience</Link></span>
            <span className="navButton"><Link className="link" to="/projects">Projects</Link></span>
            <span className="logo"><Link className="linkHome" to="/">GudokVlad</Link></span>
            <span className="navButton"><Link className="link" to="/hobbies">Activities and hobbies</Link></span>
            <span className="navButtonBorderRight"><Link className="link" to="/about">About</Link></span>
        </div>
    )
}

export default Navbar;