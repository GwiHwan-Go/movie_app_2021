
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(){
    return (
        <section className="nav_container">
            <div className="logo">
                <Link to="/">
                    <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
                </Link>
                <span className="title">Watch Movie</span>
            </div>
            <div>
                <Link to="/About" className="ellipsis">
                    <FontAwesomeIcon icon={['fas', 'ellipsis-v']} size="2x"/>
                </Link>
                <FontAwesomeIcon icon={['fas', 'search']} size="2x"/>
            </div>
        </section>
    );
}

export default Navigation;