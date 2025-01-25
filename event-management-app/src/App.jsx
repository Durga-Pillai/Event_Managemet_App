import "./App.css";
import Event from "./assets/Event";
import TicketTile from "./components/TicketTile";

function App() {
  const event = new Event(
    "Tatva",
    "OAT",
    "https://th-i.thgim.com/public/news/national/kerala/vj4edu/article68804003.ece/alternates/LANDSCAPE_1200/NITC.jpeg",
    "Apr 14",
    "10: 30",
    "hello i am The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository. The issue here is that your local Git repository does not have a remote repository set up, which is why the git push command is failing. Specifically, Git cannot find the remote called origin, which is used to push the code to a remote repository.",
    "Alvin",
    "Tech",
    200
  );

  return (
    <div>
      <TicketTile event={event} />
    </div>
  );
}

export default App;
