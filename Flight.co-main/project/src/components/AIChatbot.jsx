import React, { useState, useRef, useEffect } from "react";
import {OPENROUTER_KEY} from '../constants';

export default function FloatingAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const OPENROUTER_API_KEY =  OPENROUTER_KEY; 
  // If using CRA: process.env.REACT_APP_OPENROUTER_API_KEY

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: updatedMessages
        })
      });

      const data = await response.json();

      const aiMessage = {
        role: "assistant",
        content: data.choices[0].message.content
      };

      setMessages([...updatedMessages, aiMessage]);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "⚠️ Error connecting to AI." }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button style={styles.floatingButton} onClick={() => setIsOpen(true)}>
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Header */}
          <div style={styles.header}>
            <span>AI Assistant</span>
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          {/* Messages */}
          <div style={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.role === "user" ? "#007bff" : "#f1f1f1",
                  color: msg.role === "user" ? "white" : "black"
                }}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div style={styles.loading}>Typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={styles.inputArea}>
            <input
              style={styles.input}
              value={input}
              placeholder="Type message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button style={styles.sendBtn} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 999
  },
  chatWindow: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "350px",
    height: "500px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    zIndex: 999
  },
  header: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px"
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  message: {
    padding: "8px 12px",
    borderRadius: "15px",
    maxWidth: "75%",
    wordWrap: "break-word"
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ddd"
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none"
  },
  sendBtn: {
    padding: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer"
  },
  loading: {
    fontSize: "12px",
    color: "gray"
  }
};