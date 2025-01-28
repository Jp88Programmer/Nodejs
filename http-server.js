import http from "http";
import fs from "fs";
import url from "url";
import WebSocket, { WebSocketServer } from "ws";

let messages = ["Hello", "World"];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const log = `${Date.now()} - request hit on ${req.url}`;
  fs.appendFile("log.txt", log + "\n", (err) => {
    if (err) {
      console.log(err);
    }
  });

  if (req.method === "GET" && parsedUrl.pathname === "/messages") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(messages));
  } else if (req.method === "POST" && parsedUrl.pathname === "/send") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      messages.push(body);
      broadcastMessage(body);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Message received");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const wss = new WebSocketServer({ server });

wss.on("connection", ws => {
  ws.on("message", message => {
    messages.push(message);
    broadcastMessage(message);
  });
});

function broadcastMessage(message) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
