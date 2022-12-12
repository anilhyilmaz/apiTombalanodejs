var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var tambola = require("tambola");


var app = express();

var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.listen(port, function(){
   console.log("Port listening 3000...");
});


app.get('/getTicket/:number', function(request, response){
//let ticket = tambola.generateTicket();
let tickets = [];
let number = request.params.number;
for(let i=0;i<number;i++){
   tickets.push(tambola.generateTicket());
}
    response.send(tickets);
 });