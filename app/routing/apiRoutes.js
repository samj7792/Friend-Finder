var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

app.get("/api/friends", function(req,res) {

});

app.post("/api/friends", function(req,res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});