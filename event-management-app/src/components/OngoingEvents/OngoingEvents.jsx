import EventTile from "../EventTile/EventTile";
import "./OngoingEvents.css";

function OngoingEvents({ events }) {
  return (
    <div className="ongoing-events-container">
      <h1 className="ongoing-events-heading">Ongoing Events</h1>
      <div className="ongoing-events-list">
        {events.map((event, index) => (
          <EventTile event={event} />
        ))}
      </div>
    </div>
  );
}

export default OngoingEvents;
