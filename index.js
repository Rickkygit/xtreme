const express = require('express');
const routes = require('./router/router')
const path = require('path')

const app = express();
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')));
port = process.env.PORT || 4564;

app.use("", routes);

app.listen(port)
console.log("Server Running On Port: " + port)