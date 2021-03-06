import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">Google Book</div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Search</Link>
                    <Link className="nav-item nav-link" to="/saved">Saved</Link>
                </div>
            </div>
        </nav>

    );
}

export default Navbar