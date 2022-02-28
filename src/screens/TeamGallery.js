import React from 'react'
import './TeamGallery.css'

export default function TeamGallery() {

  const card = (details) => {
    return(
      <div>
        <img />
        <p></p>
        <p></p>
      </div>
    )
  }

  return (
    <div className="team-gallery-wrapper">
      <p className="team-gallery-heading">Team Gallery</p>
      <p className="team-gallery-sub-heading">Team Members</p>

      <p className="team-gallery-sub-heading">Alumni</p>
    </div>
  );
}
