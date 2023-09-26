import Feedback from "./components/Conditionalrendering/Feedback";
import Loading from "./components/Conditionalrendering/Loading";
import Notification from "./components/Conditionalrendering/Notification";
import Message from "./components/Conditionalrendering/Notification";

function App() {
  return (
    <div>
    <Feedback isfeedback="negative" feedback="RCB in danger"/>
    </div>
  );
}

export default App;
