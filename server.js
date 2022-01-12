var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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