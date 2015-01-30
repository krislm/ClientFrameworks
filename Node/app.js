var express = require("express");

var app = express();

var host = "127.0.0.1";
var port = 1337;

app.get("/", function(request, response) {
    response.send("Hello!");
});

app.get("/hello/:text", function(request, response) {
    response.send("Hello "+request.params.text);
});

var users = {
   "1": {
            "name": "Kris Maini",
            "twitter": "mcabe0131"
    },
    "2": {
            "name": "Aaron Morley",
            "twitter": "OnlineMagic84"
    }
};

app.get("/user/:id", function(request, response) {
    var user = users[request.params.id];
    if(user){
        response.send("<a href='http://twitter.com/" + user.twitter + "'>Follow " + user.name + " on twitter</a>");
    }else{
        response.send("Sorry can't find user "+user+":(", 404);
    }
});

app.listen(port, host);