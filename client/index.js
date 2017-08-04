var socket = io();

// Capture the button click event
$("button").click(ButtonClick);
function ButtonClick() {

  // Emit the button press for the server to intercept
  socket.emit("fromClientButtonPress");
}

// Look for the button press event coming from the server
socket.on("fromServerButtonPress", ButtonEvent);
function ButtonEvent() {

  // Do something on all clients
}