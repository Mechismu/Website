import React, { useEffect } from "react";
import "./Team.css";
import CONTENT from "../assets/Content";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import ASSETS from '../assets/Assets'

export default function TeamGallery({ setCurrScreen }) {
  
  useEffect(() => {
    setCurrScreen("team");
  }, []);

  const card = (details) => {
    return (
      <div className="card">
        <img className="card-image" src={details.photo} alt="image" />
        <p className="card-content">{details.name}</p>
        <p className="card-content">{details.department}</p>
        <span
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=" + details.email
            )
          }
        >
          <IoMdMail className="icon" />
        </span>
        <span onClick={() => window.open(details.linkdin)}>
          <IoLogoLinkedin className="icon" />
        </span>
      </div>
    );
  };

  return (
    <div className="team-gallery-wrapper">
      <p className="team-gallery-heading">Team Members</p>
      <img className='departments-banner' src={ASSETS.departments} />
      {/* <p className="team-gallery-sub-heading">Team Members</p> */}
      <p className="year-heading"> Batch of 2018 </p>
      <div className="wrap margin2rem center">
        {CONTENT.batch2022.map((details) => {
          return card(details);
        })}
      </div>
      <p className="year-heading"> Batch of 2023 </p>
      <div className="wrap margin2rem center">
        {CONTENT.batch2023.map((details) => {
          return card(details);
        })}
      </div>
      <p className="year-heading"> Batch of 2024 </p>
      <div className="wrap margin2rem center">
        {CONTENT.batch2024.map((details) => {
          return card(details);
        })}
      </div>
      <p className="team-gallery-heading">Alumni</p>
      <p className="year-heading"> Batch of 2018 </p>
      <div className="wrap margin2rem center">
        {CONTENT.batch2018.map((details) => {
          return card(details);
        })}
      </div>
      <p className="year-heading"> Batch of 2017 </p>
      <div className="wrap margin2rem center">
        {CONTENT.batch2017.map((details) => {
          return card(details);
        })}
      </div>
    </div>
  );
}
