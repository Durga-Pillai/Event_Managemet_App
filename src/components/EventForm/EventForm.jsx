import React, { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { useNavigate } from "react-router-dom";
import ticketImage from "./ticketimage.jpg"; // Importing the image
import "./EventForm.css";
import OrgHomePage from "../OrgHomePage/OrgHomePage";

const EventForm = () => {
  const [event, setEvent] = useState({
    name: "",
    startDate: "",
    endDate: "",
    location: "",
    venue: "",
    time: "",
    description: "",
    presenter: "",
    capacity: "0",
    genre: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEvent((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const [homePageVisible, setHomePageVisible] = useState(false);

  // const navigate = useNavigate();

  function handleCancel() {
    setHomePageVisible(true);
  }

  if (homePageVisible) {
    return <OrgHomePage />;
  }

  return (
    <div className="event-form-container">
      <div className="event-header">
        <img src={ticketImage} alt="Event" className="event-image" />
        <h1 className="event-title">Create Your Event</h1>
      </div>

      <div className="event-form-content">
        <div className="event-form">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            value={event.name}
            onChange={handleInputChange}
            placeholder="Enter the event name"
          />
        </div>

        <ListItem disablePadding>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Start Date" />
          <input
            type="date"
            id="startDate"
            value={event.startDate}
            onChange={handleInputChange}
          />
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="End Date" />
          <input
            type="date"
            id="endDate"
            value={event.endDate}
            onChange={handleInputChange}
          />
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <PushPinIcon />
          </ListItemIcon>
          <ListItemText primary="Location" />
          <select
            id="location"
            value={event.location}
            onChange={handleInputChange}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText primary="Venue" />
          <input
            type="text"
            id="venue"
            value={event.venue}
            onChange={handleInputChange}
            placeholder="Enter the venue"
          />
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <AccessTimeFilledIcon />
          </ListItemIcon>
          <ListItemText primary="Time" />
          <input
            type="time"
            id="time"
            value={event.time}
            onChange={handleInputChange}
          />
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <AccessTimeFilledIcon />
          </ListItemIcon>
          <ListItemText primary="Description" />
          <textarea
            id="description"
            value={event.description}
            onChange={handleInputChange}
            placeholder="Write a short description"
            rows="3"
          ></textarea>
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <CoPresentIcon />
          </ListItemIcon>
          <ListItemText primary="Presenter" />
          <input
            type="text"
            id="presenter"
            value={event.presenter}
            onChange={handleInputChange}
            placeholder="Presenter name"
          />
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Capacity" />
          <input
            type="number"
            id="capacity"
            value={event.capacity}
            onChange={handleInputChange}
          />
        </ListItem>

        <ListItem disablePadding>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Genre" />
          <select id="genre" value={event.genre} onChange={handleInputChange}>
            <option value="Hackathons">Hackathons</option>
            <option value="Technical Events">Technical Events</option>
            <option value="Cultural Events">Cultural Events</option>
          </select>
        </ListItem>

        <button className="button-container" onClick={handleCancel}>
          Create Event
        </button>
      </div>
    </div>
  );
};

export default EventForm;
