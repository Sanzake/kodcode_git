import { useEffect, useRef, useState } from "react";
import "./App.css";
import { io, type Socket } from "socket.io-client";

function App() {
	const [messages, setMessages] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [isConnected, setIsconnected] = useState(false);
	const ws = useRef<Socket | null>(null);

	useEffect(() => {
		ws.current = io('ws://localhost:8080');

    ws.current.on("connect", () => {
      console.log("connected");
      setIsconnected(true)
    })

    ws.current.on("getMsg", (msg) => {
      setMessages(prev => [...prev, msg])
    })

    ws.current.on("disconnect", () => {
      console.log("diconnect");
      setIsconnected(false)
    })
  
		return () => {
			ws.current?.close();
		};
	}, []);

  const sendMessage = () => {
    if (ws.current?.connected) {
      ws.current.emit("msg", inputValue)
      setInputValue("")
    }
  }

	return (
  <div>
    <h3>Status: {isConnected ? "Connected" : "Disconnected"}</h3>
    <div style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc", marginBottom: "10px", padding: "5px" }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
    </div>
    <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button type="button" onClick={sendMessage} disabled={!isConnected}>
          Отправить
        </button>
      </div>
  </div>
  )
}

export default App;
