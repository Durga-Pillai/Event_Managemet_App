import React from "react";
import EventTile from "../EventTile/EventTile";
import "./OrgUpcomingEvents.css";

function OrgUpcomingEvents({ events }) {
  console.log("Rendering UpcomingEvents with EventTile");
  return (
    <div className="upcoming-events-container">
      <h1 className="upcoming-events-heading">Your Upcoming Events</h1>
      <div className="upcoming-events-list">
        {events.map((event, index) => (
          <EventTile key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default OrgUpcomingEvents;
