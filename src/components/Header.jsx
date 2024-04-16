import Nav from "./Nav"

function Header({ currentPage }) {
    return (
        <header className="p-3 d-flex justify-content-between align-items-center">
            <h1>Spencer Surface</h1>
            <Nav currentPage={currentPage} />
        </header>
    );
}

export default Header
