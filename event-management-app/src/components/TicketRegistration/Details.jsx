import React from "react";
import "./Details.css";

function Details({ event }) {
  const venue = event.getVenue();
  const time = event.getTime();
  const presenters = event.getPresenters();
  const genre = event.getGenre();
  const capacity = event.getCapacity();
  const description = event.getDescription();

  return (
    <div className="details-container">
      <h1>About the Event</h1>
      <h2 className="genre">Genre: {genre}</h2>
      <div className="event-info">
        <h3>
          The event is happening at <span className="highlight">{venue}</span>{" "}
          on <span className="highlight">{time}</span>. The presenters are{" "}
          <span className="highlight">{presenters}</span>. Maximum capacity of
          the event is <span className="highlight">{capacity}</span>.
        </h3>
      </div>
      <p>{description}</p>
      <button className="book-tickets-button">Book Tickets</button>
    </div>
  );
}

export default Details;
