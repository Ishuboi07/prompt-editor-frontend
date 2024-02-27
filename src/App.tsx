import React, { useState } from "react";

interface Message {
  user: string;
  content: string;
}

const App: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const [message, setMessage] = useState("");

    const sendMessage = () => {
      if (message.trim() !== "") {
        // (Implement logic to send the message, e.g., using a socket connection)
        setMessages((messages) => [
          ...messages,
          { user: "Me", content: message },
        ]);
        setMessage("");
      }
    };


  return (
    <div className="app-background">
      <div className="chat-background">
        {messages.map((message) =>
          message.user === "Me" ? (
            <div key={message.content} className="chatbox-self">
              <b>{message.user}:</b> {message.content}
            </div>
          ) : (
            <div key={message.content} className="chatbox-bot">
              <b>{message.user}:</b> {message.content}
            </div>
          )
        )}
      </div>

      <div className="input-background">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
          className="input-box"
          placeholder="Type your message..."
        />
        <button
          className="send-button"
          onClick={sendMessage}
          disabled={message.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
