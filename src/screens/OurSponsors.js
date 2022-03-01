import React from 'react'
import "./OurSponsors.css";
import ASSETS from "../assets/Assets";
import CONTENT from '../assets/Content';

import {GoGlobe} from 'react-icons/go'
import {RiInstagramFill} from 'react-icons/ri'
import {FaFacebookSquare} from 'react-icons/fa'

export default function OurSponsors() {
  const card = (details) => {
    return (
      <div className="card-s">
        <img
          className="sponsor-card-image"
          src={details.logo}
          alt="image"
        />
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
    <div className="team-gallery-wrapper">
      <p className="team-gallery-heading">Sponsors</p>
      <div className="wrap margin2rem center">
        {CONTENT.sponsors.map((details) => {
          return card(details);
        })}
      </div>
    </div>
  );
}
