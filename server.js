var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//lowdb
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const dbdb = new FileSync("db.json")
const db = low(dbdb)

db.defaults({peoples: []})

//redirection to index.html
app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on("connection", function(socket){
    console.log('User connected');
    socket.on('disconnect', function (){
        console.log('User disconnected');
    })
    
    socket.on("message", function(msg){
        console.log(msg);

    })
})

http.listen(3000, function(){
    console.log("Server running on 3000")
})