const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {          //socket means client
    socket.on("chatMessage", (message) => {
        io.emit("message", message);   //broadcasting the message to all the clients
    })
})

app.get("/", (req, res) => {
  res.sendFile("/index.html");
})

server.listen(9000, () => console.log("Server is running on port 9000"));