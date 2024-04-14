import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Nav({ currentPage, handlePageChange }) {
    return (
        <Navbar links={[
            <Link className={`nav-link${currentPage === "About" ? " active" : ""}`} onClick={() => handlePageChange("About")} key={1} to="/about">
                About Me
            </Link>,
            <Link className={`nav-link${currentPage === "Portfolio" ? " active" : ""}`} onClick={() => handlePageChange("Portfolio")} key={2} to="/portfolio">
                Portfolio
            </Link>,
            <Link className={`nav-link${currentPage === "Contact" ? " active" : ""}`} onClick={() => handlePageChange("Contact")} key={3} to="/contact">
                Contact
            </Link>,
            <Link className={`nav-link${currentPage === "Resume" ? " active" : ""}`} onClick={() => handlePageChange("Resume")} key={4} to="/resume">
                Resume
            </Link>
        ]}/>
    );
}

export default Nav
