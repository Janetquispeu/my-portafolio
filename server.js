const express = require("express"),
      app     = express(),     
      path    = require('path');

app.use(express.static(__dirname + "/dist"));
app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),function() { // node server.js --> turn on servidor  localhost:3000/main.html
	console.log("servidor encendido");
});