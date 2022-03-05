import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ASSETS from "../assets/Assets";
import "./Navbar.css";

export default function Navbar({ currScreen }) {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo-wrapper">
        <img className="logo" src={ASSETS.logo} />
      </div>
      <div className="link-wrapper">
        <NavLink
          className={currScreen === "" ? "navbar-link selected" : "navbar-link"}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={
            currScreen === "our-projects"
              ? "navbar-link selected"
              : "navbar-link"
          }
          to="/our-projects"
        >
          Cars
        </NavLink>
        <NavLink
          className={
            currScreen === "our-sponsors"
              ? "navbar-link selected"
              : "navbar-link"
          }
          to="/our-sponsors"
        >
          Sponsors
        </NavLink>
        <NavLink
          className={
            currScreen === "team" ? "navbar-link selected" : "navbar-link"
          }
          to="/team"
        >
          Team
        </NavLink>
        <NavLink
          className={
            currScreen === "contact-us" ? "navbar-link selected" : "navbar-link"
          }
          to="/contact-us"
        >
          Contact us
        </NavLink>
      </div>
    </div>
  );
}
