console.log("index.js loaded");

var socket = io();

$("button").click(ButtonClick);
function ButtonClick() {
  socket.emit("button");
}

socket.on("button", ButtonEvent);
function ButtonEvent() {
  console.log("Button press!");
  alert("Someone pressed the button!");
}