import React, { useState } from "react";
import "./TicketTile.css";
import Details from "./Details";

function TicketTile({ event }) {
  const name = event.getName();
  const day = event.getDay();
  const month = event.getMonth();
  const description = event.getDescription();
  const image = event.getImage();

  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <>
      <div className="ticket-tile">
        <div className="ticket-image-container">
          <img src={image} alt={name} className="ticket-event-image" />
          <div className="ticket-event-name">{name}</div>
        </div>
        <div className="ticket-details">
          <h2 className="ticket-month">{month}</h2>
          <h2 className="ticket-day">{day}</h2>
          <p>{description}</p>
          <button
            className="ticket-button"
            onClick={() => {
              if (detailsVisible) {
                setDetailsVisible(false);
              } else {
                setDetailsVisible(true);
              }
            }}
          >
            Details
          </button>
        </div>
      </div>
      <div>{detailsVisible && <Details event={event} />}</div>
    </>
  );
}

export default TicketTile;
