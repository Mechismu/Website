import React from 'react'
import ASSETS from '../assets/Assets'
import './Home.css'
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Home() {
  return (
    <div>
      <div className="container">
        <img className="hero-banner" src={ASSETS.heroBanner} />
        <div className="centered">
          <p className="hero-banner-heading">Mechismu</p>
          <p className="hero-banner-sub-heading">Racing is religion</p>
        </div>
      </div>
      <div className="who-we-are-wrapper">
        <div className="who-we-are-content-wrapper">
          <p className="who-we-are-heading">Who we are</p>
          <p className="who-we-are-sub-heading">
            MECHISMU Racing is the official automotive team of IIT(ISM) Dhanbad,
            which comprises students who have a strong desire to race and work
            in the automotive sector. The squad consists of undergraduate
            students who want to accomplish something concrete at the
            undergraduate level. We design and build a formula-style racecar to
            compete in Formula SAE's International Design Competitions. Being
            the aspiring engineers who are racing fanatics, who design and
            build a formula prototype race car, will enter into international
            Formula Student competitions. Many teams from all over the world
            compete in Formula Student competitions. As a result,
            MECHISMU-Racing is Religion gain access to world-class engineering
            and encouraging the growth of engineering techniques among Indian
            students, who will be crucial to the country's technological
            innovation.
          </p>
        </div>
        <div className="yt-vid">
          <YoutubeEmbed embedId="13Hqkzu-6YY" />
        </div>
      </div>
      <div className="who-we-are-wrapper reverse">
        <div className="who-we-are-content-wrapper">
          <p className="who-we-are-heading">What we do</p>
          <p className="who-we-are-sub-heading">
            Formula Student (FS) is one of the most prestigious educational
            engineering competitions hosted by the Formula Student community.
            Spread across 5 continents, Formula Student captivates a large
            number of universities every year to participate and compete with
            each other. We design, engineer, and race our cars as a racing team
            in SAE Collegiate Design Competitions such as Formula SAE, Baja SAE,
            and Supra SAE where students are challenged to build and race
            miniature formula-style racing cars. We rely significantly on
            innovation and experimentation in our quest towards greatness. We
            plan, build, and prepare the vehicle for the competition, which
            includes both static and dynamic events.
          </p>
        </div>
        <div className="yt-vid">
          <YoutubeEmbed embedId="13Hqkzu-6YY" />
        </div>
      </div>
    </div>
  );
}
