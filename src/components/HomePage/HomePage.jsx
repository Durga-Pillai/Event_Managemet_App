import "./HomePage.css";
import Event from "../../assets/Event";
import OngoingEvents from "../OngoingEvents/OngoingEvents";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../SideBar/Sidebar";
import TicketReg from "../TicketRegistration/TicketReg";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import React, { useEffect, useRef } from "react";
import Contact from "../Contact/Contact";
import FAQ from "../FAQ/FAQ";

function HomePage() {
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

  const ongoingEvents = [
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

  const events = [...ongoingEvents, ...upcomingEvents];

  const dashboardRef = useRef(null);
  const ongoingEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const ticketRegRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

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
    document.body.classList.add("home-body");
    return () => {
      document.body.classList.remove("home-body");
    };
  }, []);

  return (
    <div className="home-root">
      <Sidebar scrollToSection={scrollToSection} />
      <div ref={dashboardRef} className="home-app-container">
        <h2>Dashboard Section</h2>
        <Dashboard badge={5} registered={2} currentlyRegistered={1} />
      </div>
      <div ref={ongoingEventsRef} className="home-app-container">
        <OngoingEvents events={ongoingEvents} />
      </div>
      <div ref={upcomingEventsRef} className="home-app-container">
        <UpcomingEvents events={upcomingEvents} />
      </div>
      <div ref={ticketRegRef} className="home-app-container">
        <TicketReg events={events} />
      </div>
      <div ref={contactRef} className="home-app-container">
        <Contact />
      </div>
      <div ref={faqRef} className="home-app-container">
        <FAQ />
      </div>
    </div>
  );
}

export default HomePage;
