import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

// Import the components for the App and each page
import App from './App.jsx'
import AboutPage from "./pages/AboutPage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import ResumePage from "./pages/ResumePage"
import ErrorPage from "./pages/ErrorPage"

// Create the react router for the site
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "portfolio",
                element: <PortfolioPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "resume",
                element: <ResumePage />
            }
        ]
    }
]);

// Render the site
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);
