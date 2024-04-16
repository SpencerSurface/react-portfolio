import Nav from "./Nav"

// The header
// currentPage is the name of the current page: "About", "Portfolio", "Contact", or "Resume"
function Header({ currentPage }) {
    return (
        <header className="p-3">
            <h1>Spencer Surface</h1>
            <Nav currentPage={currentPage} />
        </header>
    );
}

export default Header
