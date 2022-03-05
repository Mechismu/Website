import React, { useEffect } from "react";
import "./OurSponsors.css";
import ASSETS from "../assets/Assets";
import CONTENT from "../assets/Content";
import Button from "@mui/material/Button";

import { GoGlobe } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function OurSponsors({ setCurrScreen }) {
  useEffect(() => {
    setCurrScreen("our-sponsors");
  }, []);

  const card = (details) => {
    return (
      <div className="card-s">
        <img className="sponsor-card-image" src={details.logo} alt="image" />
        <div className="hover text round-border">
          <p className="sponsor-name">{details.name}</p>
          <span>
            <span onClick={() => window.open(details.website)}>
              <GoGlobe className="icon" />
            </span>
            <span onClick={() => window.open(details.instagram)}>
              <RiInstagramFill className="icon" />
            </span>
            <span onClick={() => window.open(details.facebook)}>
              <FaFacebookSquare className="icon" />
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="team-gallery-wrapper center-justify">
      <p className="team-gallery-heading">Sponsors</p>
      {/* <div className="croud-funding margin2rem">
        <img className="croud-funding-image" src={ASSETS.whatWeDo} />
        <div className="croud-funding-content">
          <p className="croud-funding-info">
            You can become a supporter <br />
            Join the croudfunding organised by Mechismu Racing <br />
            And become a part of our journey
          </p>
          <Button variant="contained">Support us</Button>
        </div>
      </div> */}
      <div className="wrap margin2rem center">
        {CONTENT.sponsors.map((details) => {
          return card(details);
        })}
      </div>
    </div>
  );
}
