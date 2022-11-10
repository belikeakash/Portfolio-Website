import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="main">
        
          <div className="logo"><Link to="/">
            <span className="header_span">&#123; </span>
            Dev - graVity
            <span className="header_span"> &#125;</span>
            </Link>
          </div>
        
        <div className="info-header">
          <Link to="/about">
            <div className="app info_1">About Me</div>
          </Link>
          <Link to="/projects">
            <div className="app info_2">Projects</div>
          </Link>
          <Link to="/contact">
            <div className="app info_3">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
