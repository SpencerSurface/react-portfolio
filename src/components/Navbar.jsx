// Component for the nav. Contains most of the HTML so the nav component can look cleaner.
// links is an array of the link components that the nav items are meant to be linked by 
export default function Navbar({ links }) {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => <li className="nav-item" key={link.key}>{link}</li>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}