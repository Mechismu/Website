import React from 'react';
import './OurSponsors.css';
import ASSETS from '../assets/Assets';


export default function OurSponsors() {
  return (
    <div>
      <h1>Our Sponsors</h1>
      <div className="container">
  <img src={ASSETS.ansyslogo} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">Ansys</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.aranyalogo} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">Aranya</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.autodesk} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">autodesk</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.fmsci} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">fmsci</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.gail} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">Gail</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.jktyre} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">J K Tyre</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.ims} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">Ims</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.mathworks} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">mathworks</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.pioneer} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">Pioneer</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.ricardo} alt="Avatar" className='image' />
  <div className="overlay">
    <div className="text">Ricardo</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.sbilogo} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">SBI</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.seo} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">SEO</div>
  </div>
</div>
<div className="container">
  <img src={ASSETS.Burnout} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">Burnout</div>
  </div>
</div>


</div>
      
  );
}
