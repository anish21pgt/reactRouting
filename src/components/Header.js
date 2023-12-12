import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
function Header() {
  return (
    <div>

      <div className="company-name" style={{ background: 'black', color: 'white', display: 'flex' }}>

        <h1>
          <img src={logo} alt="logo" style={{ width: '100px', height: '90px', paddingTop: '3px' }} />
          <b>ABC Cricket Club</b>
        </h1>

        <nav className="navbar" style={{ paddingLeft: '550px' }}>
          <div className="nav-links">
            <Link to="/" className="navLink">
              HOME
            </Link>
            <Link to="/services" className="navLink">
              SERVICES
            </Link>
            <Link to="/contact" className="navLink">
              CONTACT
            </Link>
            <Link to="/dashboard" className="navLink">
              DASHBOARD
            </Link>
            <Link to="/user" className="navLink">
              PLAYERS
            </Link>
            <Link to="/auth" className="navLink">
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
