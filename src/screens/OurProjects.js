import React, { useEffect } from "react";

export default function OurProjects({ setCurrScreen }) {
  
  useEffect(() => {
    setCurrScreen("our-projects");
  }, []);

  return (
    <div>
      <div>OurProjects</div>
      <h2>MRX 101</h2>
      <div>
        <p>
          The MRX101 was the team's first attempt at manufacturing a race car,
          and it competed in Formula Bharat 2017. Here are the specifications of
          our first race car MRX01 :
        </p>
      </div>
    </div>
  );
}
