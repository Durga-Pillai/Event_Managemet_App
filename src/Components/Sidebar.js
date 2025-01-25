import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GridViewIcon from '@mui/icons-material/GridView';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventIcon from '@mui/icons-material/Event';
import { useNavigate } from 'react-router-dom';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import './Sidebar.css';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
// import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {

    const [state, setState] = React.useState({ left: false });
    const navigate = useNavigate();

      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
                <ListItemText primary={"Event Managers"} />
            </ListItemButton>
            </ListItem>

            <Divider sx={{my: 2}} />
        <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/Dashboard')}>
            <ListItemIcon>
            <GridViewIcon />
            </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/OngoingEvents')}>
            <ListItemIcon>
            <EventAvailableIcon />
            </ListItemIcon>
                <ListItemText primary={"Ongoing Events"} />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/upcomingEvents')}>
            <ListItemIcon>
            < EventIcon/>
            </ListItemIcon>
                <ListItemText primary={"Upcoming Events"} />
            </ListItemButton>
            
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('./Tile')}>
            <ListItemIcon>
            < BookOnlineIcon/>
            </ListItemIcon>
                <ListItemText primary={"Ticket Registration"} />
            </ListItemButton>
            
        </ListItem>
      </List>
      <Divider />
      <List>
        
        <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('./Contacts')}>
            <ListItemIcon>
            < ContactSupportIcon/>
            </ListItemIcon>
                <ListItemText primary={"Contacts"} />
            </ListItemButton>
            
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('./Faqs')}>
            <ListItemIcon>
            < LiveHelpIcon/>
            </ListItemIcon>
                <ListItemText primary={"FAQ's"} />
            </ListItemButton>
            
        </ListItem>
      </List>
      
      <ListItem  sx={{ position:'relative',bottom:-100,width:'100%'}}disablePadding>
            <ListItemButton onClick={() => navigate('./Logout')}>
            <ListItemIcon>
            < LogoutIcon/>
            </ListItemIcon>
                <ListItemText primary={"Logout"} />
            </ListItemButton>
            
        </ListItem>
    </Box>
  );




  return (
    <div>
      
      
        <WidgetsIcon 
            onClick={
                toggleDrawer("left",true)
            }
        />
        <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
      

    </div>
  )
}

export default Sidebar
