const express = require("express")
  , app = express()
  , http = require("http").Server(app)
  , io = require("socket.io")(http);

app.use(express.static("client"));

app.get("/", function(req, res) {
  console.log(res);
  res.sendFile("/srv/socketio/client/index.html");
});

// On connection, get the socket
io.on("connection", ConnectionEvent);
function(socket) {

  // Show in server console that a client has connected
  console.log("Client has connected");

  // Capture the button event from the clients
  socket.on("button", function() {

    io.emit("button");
  });
}

// http server on port 3000
http.listen(3000, function() {
  console.log("Express is listening...");
});