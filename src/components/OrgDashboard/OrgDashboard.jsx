import React from "react";
import "./OrgDashboard.css";

function OrgDashboard({ badge, conducted, currentlyConducting }) {
  return (
    <div className="orgdashboard-container">
      <div className="dashboard-tile">
        <h1>Badge</h1>
        <h3>{badge}</h3>
      </div>
      <div className="orgdashboard-tile">
        <h1>Conducted</h1>
        <h3>{conducted}</h3>
      </div>
      <div className="orgdashboard-tile">
        <h1>Currently Conducting</h1>
        <h3>{currentlyConducting}</h3>
      </div>
    </div>
  );
}

export default OrgDashboard;
