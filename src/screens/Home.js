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
      <div className="who-we-are-wrapper ">
        <div className="who-we-are-content-wrapper">
          <p className="who-we-are-heading">Crowdfunding</p>
          <p className="who-we-are-sub-heading">
       

We are Team MECHISMU - the official racing team of IIT ISM Dhanbad. We as a team participate in various momentous events like FSAE, Formula Bharat, SAE SUPRA 2020, Formula Imperial, etc. our team's incessant win started from 2010 when we backed 2nd place among 200 teams in BAJA SAE INDIA and this legacy is still carried by our team members until the very end

Starting from Designing, Planning, Manufacturing, and testing our team works very ardently to fabricate their notions into a sensational racing car. This year (2022)we took an initiative to take our team to the elite level by converting our vehicle from IC engine to Electric Vehicle

“You don’t expect to be at the top of the mountain the day you start climbing.” – Ron Dennis

We need funds to develop our vehicle which we can represent on a national, if not on a global scale. We are confident that with our diligence and synergism, we will complete this competition with flying colors and gain abundant knowledge and bring justice to the amount raised by this crowdfunding.
Your donation will help us not only to build an efficient Electric Vehicle but also take our skills to a legit level
          </p>
        </div>
        <div className="yt-vid">
          <YoutubeEmbed embedId="13Hqkzu-6YY" />
        </div>
      </div>
    </div>
  );
}
