import "./OrgHomePage.css";
import Event from "../../assets/Event";
import Dashboard from "../Dashboard/Dashboard";
import React, { useEffect, useRef, useState } from "react";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";
import OrgUpcomingEvents from "../OrgUpcomingEvents/OrgUpcomingEvents";
import OrgSidebar from "../OrgSideBar/OrgSideBar";
import EventForm from "../EventForm/EventForm";
import OrgDashboard from "../OrgDashboard/OrgDashboard";

function OrgHomePage() {
  const upcomingEvents = [
    new Event(
      "Tatva",
      "OAT",
      "https://th-i.thgim.com/public/news/national/kerala/vj4edu/article68804003.ece/alternates/LANDSCAPE_1200/NITC.jpeg",
      "Apr 14",
      "Apr 16",
      "10: 30",
      "hello i am The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository. The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository.",
      "Alvin",
      "Tech",
      200
    ),
    new Event(
      "Ragam",
      "OAT",
      "https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/82815860_3018066191538473_2741255343299362816_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=In_w_q-haHIQ7kNvgHxQrDA&_nc_zt=23&_nc_ht=scontent-maa2-1.xx&_nc_gid=ATd1Wx47n7NQpPQBBLdr8e6&oh=00_AYCqrTR4ZJ__tO7FrQ0KdtVao7nAI7XemOGEGSROvOUb3g&oe=67BC53C9",
      "Feb 23",
      "Feb 26",
      "7: 00",
      "hello i am The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository. The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository.",
      "Salim Sulaiman",
      "Cultural",
      1000
    ),
    new Event(
      "Ragam",
      "OAT",
      "https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/82815860_3018066191538473_2741255343299362816_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=In_w_q-haHIQ7kNvgHxQrDA&_nc_zt=23&_nc_ht=scontent-maa2-1.xx&_nc_gid=ATd1Wx47n7NQpPQBBLdr8e6&oh=00_AYCqrTR4ZJ__tO7FrQ0KdtVao7nAI7XemOGEGSROvOUb3g&oe=67BC53C9",
      "Feb 23",
      "Feb 26",
      "7: 00",
      "hello i am The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository. The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository.",
      "Salim Sulaiman",
      "Cultural",
      1000
    ),
    new Event(
      "Ragam",
      "OAT",
      "https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/82815860_3018066191538473_2741255343299362816_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=In_w_q-haHIQ7kNvgHxQrDA&_nc_zt=23&_nc_ht=scontent-maa2-1.xx&_nc_gid=ATd1Wx47n7NQpPQBBLdr8e6&oh=00_AYCqrTR4ZJ__tO7FrQ0KdtVao7nAI7XemOGEGSROvOUb3g&oe=67BC53C9",
      "Feb 23",
      "Feb 26",
      "7: 00",
      "hello i am The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository. The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository.",
      "Salim Sulaiman",
      "Cultural",
      1000
    ),
  ];

  const dashboardRef = useRef(null);
  const ongoingEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const ticketRegRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);
  const [createEventVisible, setCreateEventVisible] = useState(false);

  const scrollToSection = (section) => {
    if (section === "dashboard") {
      dashboardRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "ongoingEvents") {
      ongoingEventsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "upcomingEvents") {
      upcomingEventsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "ticketReg") {
      ticketRegRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "faq") {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.classList.add("orghome-body");
    return () => {
      document.body.classList.remove("orghome-body");
    };
  }, []);

  const handleFABClick = () => {
    console.log("Button clicked");
    setCreateEventVisible(true);
  };

  if (createEventVisible) {
    return <EventForm />;
  }

  return (
    <div className="orghome-root">
      <OrgSidebar scrollToSection={scrollToSection} />
      <div ref={dashboardRef} className="orghome-app-container">
        <h2>Dashboard Section</h2>
        <OrgDashboard badge={5} conducted={2} currentlyConducting={1} />
      </div>
      <div ref={upcomingEventsRef} className="orghome-app-container">
        <OrgUpcomingEvents events={upcomingEvents} />
      </div>
      <div ref={contactRef} className="orghome-app-container">
        <Contact />
      </div>
      <div ref={faqRef} className="orghome-app-container">
        <FAQ />
      </div>
      <button className="floating-action-button" onClick={handleFABClick}>
        +
      </button>
    </div>
  );
}

export default OrgHomePage;
