import React, { useEffect } from "react";
import ASSETS from "../assets/Assets";
import "./ContactUs.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function ContactUs({ setCurrScreen }) {

  useEffect(() => {
    setCurrScreen("contact-us");
  }, []);

  return (
    <div className="team-gallery-wrapper">
      <p className="team-gallery-heading">Contact us</p>

      <div className="contact-us-flex">
        <div className="contact-us-card">
          <p className="contact-us-card-heading">Contact info</p>
          <div className="contact-us-card-info">
            <p>
              <span style={{ fontWeight: "bold" }}>Address : </span>
              <span>Workshop Building, IIT(ISM) Dhanbad, Jharkhand</span>
            </p>
            <div className="flex">
              <p className="contact-us-links">
                <RiInstagramFill className="icons" />
                <span
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/mechismuracing/?hl=en"
                    )
                  }
                  className="icon-link"
                >
                  mechismuracing
                </span>
              </p>
              <p className="contact-us-links">
                <FaFacebookSquare className="icons" />
                <span
                  onClick={() =>
                    window.open("https://www.facebook.com/mechismu")
                  }
                  className="icon-link"
                >
                  mechismu
                </span>
              </p>
            </div>
          </div>
          <img src={ASSETS.workshop} className="contact-us-images" />
        </div>
        <div className="contact-us-card">
          <p className="contact-us-card-heading">Contact form</p>
          
        </div>
      </div>
    </div>
  );
}
