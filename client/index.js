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

  var initialText = $("#paragraph").text();

  $("#paragraph").text(initialText + "\n" + _GenerateRandomCharacters());
}

socket.on("clientDisconnected", ClientDisconnectedEvent);
function ClientDisconnectedEvent() {

  alert("A buddy disconnected :(");
}

// Generate random characters to append to the text
function _GenerateRandomCharacters() {

  var output = "";
  var chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789";

  for (var i = 0; i < 5; i++)
    output += chars.charAt(Math.floor(Math.random() * chars.length));

  return output;
}