import React, { useEffect } from "react";

export default function OurProjects({ setCurrScreen }) {
  
  useEffect(() => {
    setCurrScreen("our-projects");
  }, []);

  return (
    <div className="team-gallery-wrapper center-justify">
      <p className="team-gallery-heading">Cars</p>
    </div>
  );
}
