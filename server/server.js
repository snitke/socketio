const express = require("express")
  , app = express()
  , http = require("http").Server(app)
  , io = require("socket.io")(http);

// Read in the client files
app.use(express.static("client"));

// Start http server using express
http.listen(3000, ServerListening);
function ServerListening() {

  console.log("Server listening (localhost:3000)...");
}

var namespace = io.of("/namespace");

// On connection, get the socket
namespace.on("connection", ConnectionEvent);
function ConnectionEvent(socket) {

  // Show in server console that a client has connected
  console.log("Client", socket.id, "has connected");
  namespace.emit("connection");
}

// On connection, get the socket
io.on("connection", ConnectionEvent);
function ConnectionEvent(socket) {

  // Show in server console that a client has connected
  console.log("Client", socket.id, "has connected");

  socket.on("disconnect", DisconnectEvent);
  function DisconnectEvent() {

    // Show in server console that a client has disconnected
    console.log("Client", socket.id, "has disconnected");

    io.emit("clientDisconnected");
  }

  // Capture the button event from the clients
  socket.on("fromClientButtonPress", ClientButtonPressEvent);
  function ClientButtonPressEvent() {

    console.log("Client", socket.id, "is pressing the button");

    io.emit("fromServerButtonPress");
  }
}
