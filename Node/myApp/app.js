var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', routes);

app.listen(3000, function(){
    console.log("Express server listening. Port "+3000);
});

