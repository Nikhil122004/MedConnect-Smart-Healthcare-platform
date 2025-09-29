import React, { useState, useRef, useEffect } from "react";
import chatIcon from "../assets/chat.png"; // your chat icon

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const chatbotRef = useRef(null); // Ref for the chatbot container

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await fetch("http://127.0.0.1:8050/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.response || "Sorry, I didn't understand." };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: "bot", text: "Error connecting to server." }]);
    }

    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }} ref={chatbotRef}>
      {open ? (
        <div style={{
          width: "300px",
          height: "400px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ backgroundColor: "#05023fff", color: "white", padding: "10px", textAlign: "center", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
            Support Chat
          </div>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "5px 0" }}>
                <span style={{
                  display: "inline-block",
                  padding: "8px",
                  borderRadius: "10px",
                  backgroundColor: msg.sender === "user" ? "#79f146ff" : "#f0f0f0"
                }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", borderTop: "1px solid #ccc" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ flex: 1, padding: "10px", border: "none", borderRadius: "0 0 0 10px" }}
              placeholder="Type a message"
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} style={{ padding: "10px", backgroundColor: "#040132ff", color: "white", border: "none", borderRadius: "0 0 10px 0" }}>Send</button>
          </div>
        </div>
      ) : (
        <img
          src={chatIcon}
          alt="Chat"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={() => setOpen(true)}
        />
      )}
    </div>
  );
};

export default Chatbot;
