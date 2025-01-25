import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleIcon from '@mui/icons-material/People';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import './Eventform.css'
import CoPresentIcon from '@mui/icons-material/CoPresent';

const EventForm = () => {
  const [event, setEvent] = useState({
    name:"",
    startDate: "",
    endDate: "",
    location: "",
    venue:"",
    time:"",
    description:"",
    presenter:"",
    capacity: "0",
    genre: "",
  });
  const handleEventNameChange= (e)=> {
    setEvent(e.target.value);
  };

  
  return (
    <>
     <div className="event-form-container">
        <img 
        src="ticketimage.jpg"
        alt="Event Image"
        className="event-image"
        />
    
        <div className="event-form">
          <label htmlFor="event-name">Event Name</label>
          <input type="text"
          id="event-name"
          value={event.name} 
          onChange={handleEventNameChange}
          placeholder="Event Name"
          className="p-2 rounded bg-blue-600"/>
        </div>
     <ListItem disablePadding>
        <ListItemIcon>
        <CalendarMonthIcon/>
        </ListItemIcon>
        <ListItemText primary={"Start Date"} />
        <div className="event-form">
        <input type="date"
        id="start-date"
        value={event.startDate} 
        onChange={handleEventNameChange}
        placeholder="Start Date"
       
        />
         </div>
     </ListItem>
     <ListItem disablePadding>
        <ListItemIcon>
        <CalendarMonthIcon/>
        </ListItemIcon>
        <ListItemText primary={"End Date"} />
        <div className="event-form">
        <input type="date"
        id="end-date"
        value={event.endDate} 
        onChange={handleEventNameChange}
        placeholder="End Date"
        />
         </div>
     </ListItem>
    
     <ListItem disablePadding>
        <ListItemIcon>
        <PushPinIcon/>
        </ListItemIcon>
        <ListItemText primary={"Location"} />
        <div className="event-form">
        <select
        id="location"
        value={event.location} 
        onChange={handleEventNameChange}
        >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
        </select>
         </div>
         </ListItem>
     <ListItem disablePadding>
        <ListItemIcon>
        <PlaceIcon/>
        </ListItemIcon>
        <ListItemText primary={"Venue"} />
        <div className="event-form">
        <input type="text"
        id="venue"
        value={event.venue} 
        onChange={handleEventNameChange}
        placeholder="Venue"
        />
         </div>
         </ListItem>
         <ListItem disablePadding>
        <ListItemIcon>
        <AccessTimeFilledIcon/>
        </ListItemIcon>
        <ListItemText primary={"Time"} />
        <div className="event-form">
        <input type="time"
        id="event-time"
        value={event.time} 
        onChange={handleEventNameChange}
        placeholder="Event Time"
        />
         </div>
     </ListItem>
     <ListItem disablePadding>
        <ListItemIcon>
        <AccessTimeFilledIcon/>
        </ListItemIcon>
        <ListItemText primary={"Description"} />
        <div className="event-form">
        <textarea  
        id="event-description"
        value={event.description} 
        onChange={handleEventNameChange}
        placeholder="Event Description"
        rows="3" 
        cols="50" 
      ></textarea>
      
         </div>
     </ListItem>
     <ListItem disablePadding>
        <ListItemIcon>
        <CoPresentIcon/>
        </ListItemIcon>
        <ListItemText primary={"Presenter"} />
        <div className="event-form">
        <input type="text"
        id="presenter"
        value={event.presenter} 
        onChange={handleEventNameChange}
        placeholder="Presenter"
        />
         </div>
         </ListItem>
     <ListItem disablePadding>
        <ListItemIcon>
        <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary={"Capacity"} />
        <div className="event-form">
        <input type="number"
        id="capacity"
        value={event.capacity} 
        onChange={handleEventNameChange}
        />
        
         </div>
     </ListItem>
     <ListItem disablePadding>
        <ListItemIcon>
        <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary={"Genre"} />
        <div className="event-form">
        <select
        id="genre"
        value={event.genre} 
        onChange={handleEventNameChange}
        >
        <option value="Hackathons">Hackathons</option>
        <option value="Technical Events">Technical Events</option>
        <option value="Cultural Events">Cultural Events</option>
        </select>
         </div>
     </ListItem>
     </div>
    </>
  );
};

export default EventForm