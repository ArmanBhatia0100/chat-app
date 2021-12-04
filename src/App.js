import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        userName="arman001"
        userSecret="qwert"
        projectID="e5356c73-df2c-4768-92da-2c9ee1a09045"
        renderChatFeed={(chatAppState) => {
          return <ChatFeed {...chatAppState}></ChatFeed>;
        }}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      ></ChatEngine>
    </div>
  );
}

export default App;
