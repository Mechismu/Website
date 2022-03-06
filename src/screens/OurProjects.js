import React, { useEffect, useState } from "react";
import CARS from "../assets/Cars";
import "./OurProjects.css";
import { ImageViewer } from "react-image-viewer-dv";

export default function OurProjects({ setCurrScreen }) {
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    setCurrScreen("our-projects");
  }, []);

  const carCard = (car) => {
    return (
      <div
        className={
          carDetails !== null && car.name === carDetails.name
            ? "car-wrapper slected-car"
            : "car-wrapper"
        }
        onClick={() => setCarDetails(car)}
      >
        <img className="car-image" src={car.image} />
        <p className="car-card-title">
          <span className="bold">{car.name}</span>
          <br />
          <span>{car.year}</span>
        </p>
      </div>
    );
  };

  const carousel = (images) => {
    return (
      <ImageViewer className='margin-hor-2rem'>
        {images.map((image) => {
          return <img className="car-gallery-image" src={image} />;
        })}
      </ImageViewer>
    );
  };

  const showDetails = () => {
    return (
      <div>
        <div className="space-evenly">
          <div className="w45">
            <p className="contact-us-card-heading">{carDetails.name}</p>
            <p>{carDetails.details}</p>
            <img className="w100" src={carDetails.image} />
          </div>
          <img className="maxheight100" src={carDetails.specs} />
        </div>
        <p className="contact-us-card-heading">Gallery</p>
        {carousel(carDetails.gallery)}
      </div>
    );
  };

  const defaultShow = () => {
    return (
      <div className="default-details">
        Please select a car to view details.
      </div>
    );
  };

  return (
    <div className="team-gallery-wrapper center-justify">
      <p className="team-gallery-heading">Cars</p>
      <div className="car-card">
        {Object.entries(CARS).map((car) => {
          return carCard(car[1]);
        })}
      </div>
      <div className="wrapper">
        {carDetails === null ? defaultShow() : showDetails()}
      </div>
    </div>
  );
}
