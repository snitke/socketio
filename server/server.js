const express = require("express")
  , app = express()
  , http = require("http").Server(app)
  , io = require("socket.io")(http);

// Read in the client files
app.use(express.static("client"));

// http server on port 3000
http.listen(3000, ServerListening);
function ServerListening() {

  console.log("Server listening (localhost:3000)...");
}

app.get("/", AppGet);
function AppGet(req, res) {

  res.sendFile("/srv/socketio/client/index.html");
}

// On connection, get the socket
io.on("connection", ConnectionEvent);
function ConnectionEvent(socket) {

  // Show in server console that a client has connected
  console.log("Client has connected");

  // Capture the button event from the clients
  socket.on("fromClientButtonPress", ClientButtonEvent);
  function ClientButtonEvent() {

    io.emit("fromServerButtonPress");
  }
}
