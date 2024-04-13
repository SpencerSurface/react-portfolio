import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Nav() {
    return (
        <Navbar links={[
            <Link key={1} to="/about">
                About Me
            </Link>,
            <Link key={2} to="/portfolio">
                Portfolio
            </Link>,
            <Link key={3} to="/contact">
                Contact
            </Link>,
            <Link key={4} to="/resume">
                Resume
            </Link>
        ]}/>
    );
}

export default Nav
