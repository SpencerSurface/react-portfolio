import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App() {
    const [currentPage, setCurrentPage] = useState("About");

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App
