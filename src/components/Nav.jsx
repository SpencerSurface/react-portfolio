import { Link } from "react-router-dom"
import Navbar from "./Navbar"

// The navbar
// currentPage is the name of the current page: "About", "Portfolio", "Contact", or "Resume"
function Nav({ currentPage }) {
    return (
        <Navbar links={[
            // The active class is included if the nav item matches the current page
            <Link className={`nav-link${currentPage === "About" ? " active" : ""}`} key={1} to="/about">
                About Me
            </Link>,
            <Link className={`nav-link${currentPage === "Portfolio" ? " active" : ""}`} key={2} to="/portfolio">
                Portfolio
            </Link>,
            <Link className={`nav-link${currentPage === "Contact" ? " active" : ""}`} key={3} to="/contact">
                Contact
            </Link>,
            <Link className={`nav-link${currentPage === "Resume" ? " active" : ""}`} key={4} to="/resume">
                Resume
            </Link>
        ]}/>
    );
}

export default Nav
