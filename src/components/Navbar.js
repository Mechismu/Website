import React from "react";
import { Link } from "react-router-dom";
import ASSETS from '../assets/Assets'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo-wrapper">
        <img className="logo" src={ASSETS.logo} />
      </div>
      <div className="link-wrapper">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/our-projects">
          Our projects
        </Link>
        <Link className="navbar-link" to="/our-sponsors">
          Our sponsors
        </Link>
        <Link className="navbar-link" to="/team-gallery">
          Team gallery
        </Link>
        <Link className="navbar-link" to="/contact-us">
          Contact us
        </Link>
      </div>
    </div>
  );
}
