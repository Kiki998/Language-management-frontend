import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <Link className="nav-link" to="/languages" >Language Management</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/languages">Languages
                    <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/categories" >Categories</Link>
            </li>          
            </ul>
        </div>
        </div>
    </nav>
);

export default Header