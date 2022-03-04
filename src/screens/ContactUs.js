import React from 'react'
import ASSETS from '../assets/Assets'
import './ContactUs.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function ContactUs() {
  
  console.log("Contact us");
  
  return (
    <div className="team-gallery-wrapper">
      <p className="team-gallery-heading">Contact us</p>

      <div className="contact-us-flex">
        <div className="contact-us-address">
          <div className="flex margin">
            <img src={ASSETS.iitismLogo} className="iitism-logo" />
            <img src={ASSETS.logo} className="big" />
          </div>
          Workshop building, 1st floor <br />
          IIT(ISM), Dhanbad <br />
          Jharkhand, 826004 <br />
          <span
            onClick={() =>
              window.open("https://www.instagram.com/mechismuracing/?hl=en")
            }
          >
            <RiInstagramFill className="contact-icon" />
          </span>
          <span
            onClick={() => window.open("https://www.facebook.com/mechismu")}
          >
            <FaFacebookSquare className="contact-icon" />
          </span>
        </div>
        <img src={ASSETS.iitism} className="contact-us-images" />
      </div>
      <img src={ASSETS.iitism} className="iitism" />
    </div>
  );
}
