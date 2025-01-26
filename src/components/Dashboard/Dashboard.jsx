import React from "react";
import "./Dashboard.css";

function Dashboard({ badge, registered, currentlyRegistered }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-tile">
        <h1>Badge</h1>
        <h3>{badge}</h3>
      </div>
      <div className="dashboard-tile">
        <h1>Registered</h1>
        <h3>{registered}</h3>
      </div>
      <div className="dashboard-tile">
        <h1>Currently Registered</h1>
        <h3>{currentlyRegistered}</h3>
      </div>
    </div>
  );
}

export default Dashboard;
