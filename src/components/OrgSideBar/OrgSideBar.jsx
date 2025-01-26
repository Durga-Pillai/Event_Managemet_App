import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// Icons
import WidgetsIcon from "@mui/icons-material/Widgets";
import GridViewIcon from "@mui/icons-material/GridView";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventIcon from "@mui/icons-material/Event";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LogoutIcon from "@mui/icons-material/Logout";

import "./OrgSideBar.css";

const OrgSidebar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  // Sidebar List Items
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="FAB"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WidgetsIcon />
            </ListItemIcon>
            <ListItemText primary="Event Managers" />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ my: 2 }} />
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("dashboard")}>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("ongoingEvents")}>
            <ListItemIcon>
              <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText primary="Ongoing Events" />
          </ListItemButton>
        </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("upcomingEvents")}>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Upcoming Events" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("ticketReg")}>
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary="Ticket Registration" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List> */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("contact")}>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("faq")}>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ's" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default OrgSidebar;
