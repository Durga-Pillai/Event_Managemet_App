import React from "react";
import TicketTile from "./TicketTile";
import "./TicketReg.css";

function TicketReg({ events }) {
  console.log("Rendering TicketReg with TicketTile");
  return (
    <div className="ticket-reg-container">
      <h1 className="ticket-reg-heading">Register Events</h1>
      <div className="ticket-reg-list">
        {events.map((event, index) => (
          <TicketTile key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default TicketReg;
