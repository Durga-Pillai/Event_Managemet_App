import React from "react";
import "./TicketTile.css";

function TicketTile({ event }) {
  const name = event.getName();
  const date = event.getDate();
  const day = event.getDay();
  const month = event.getMonth();
  const description = event.getDescription();
  const image = event.getImage();

  return (
    <div className="tile">
      <div className="image-container">
        <img src={image} alt={name} className="event-image" />
        <div className="event-name">{name}</div>
      </div>
      <div className="details">
        <h2 className="month">{month}</h2>
        <h2 className="day">{day}</h2>
        <p>{description}</p>
        <button className="ticket-button">Get Ticket</button>
      </div>
    </div>
  );
}

export default TicketTile;
