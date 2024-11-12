const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require('path');
const { Server } = require('socket.io');

// mongoose 

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/UserData")
//     .then(() => {
//         console.log("connected");
//     })
//     .catch(() => {
//         console.log("disconnect");
//     })


app.use(express.static(path.resolve("./public")));

const io = new Server(server); // create io instencse

io.on('connection', (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});



app.get("/", (req, res) => {
    return res.sendFile("/public/index.html")
})



server.listen(3000, () => {
    console.log("Server is runing on Port : 3000");
})