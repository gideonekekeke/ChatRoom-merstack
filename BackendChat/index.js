require("dotenv").config();
const express = require("express")();
const http = require("http").createServer(express);
const socketio = require("socket.io");
const io = socketio(http);

const port = process.env.PORT || 4000;

//connecting to the scokect
io.on("connection", (socket) => {
	console.log("a user is connected");

	socket.on("create-room", (name) => {
		console.log("the room name is received", name);
	});
});

http.listen(port, () => {
	console.log("listening on port 4000");
});
