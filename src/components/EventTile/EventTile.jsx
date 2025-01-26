import React from "react";
import "./EventTile.css";

function EventTile({ event }) {
  const name = event.getName();
  const startDate = event.getStartDate();
  const time = event.getTime();
  const presenter = event.getPresenters();
  const image = event.getImage();

  return (
    <div className="tile">
      <div className="image-container">
        <img src={image} alt={name} className="event-image" />
        <div className="event-name">{name}</div>
      </div>

      <div className="presenter">
        <h3>{presenter}</h3>
      </div>
      <div className="details">
        <p>{startDate}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EventTile;
