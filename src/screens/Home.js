import React from 'react'
import ASSETS from '../assets/Assets'
import './Home.css'

export default function Home() {
  return (
    <div className="container">
      <img className="hero-banner" src={ASSETS.heroBanner} />
      <div className="centered">
        <p className="hero-banner-heading">Mechismu</p>
        <p className="hero-banner-sub-heading">Racing is religion</p>
      </div>
    </div>
  );
}
