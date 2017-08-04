console.log("index.js loaded");

var socket = io();

$("button").click(ButtonClick);
function ButtonClick() {

  socket.emit("fromClientButtonPress");
}

socket.on("fromServerButtonPress", ButtonEvent);
function ButtonEvent() {

  // Do something on all clients
}