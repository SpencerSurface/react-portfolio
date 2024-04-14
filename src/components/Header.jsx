import Nav from "./Nav"

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Spencer Surface</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

export default Header
