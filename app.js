const express = require("express");// Dependency // requring express from our node modules
const app = express();// configuration // storing an instance of express in our app variable 
const animesController = require("./controllers/animes")

app.use(express.json()) // parse incoming json - when we make an http request we receive a json  string and we parse it into a JSON object. we need to place our JSON parser before our routes.

app.use("/animes", animesController)// binding our path to the routes found in our controller file

app.get("/", (_, response) => { // route for our "homepage"
    response.send( "Welcome to Animania" );
  });
// catch all for request that did not match any route (method & paths)
app.get("*",(_, res) =>{
  res.status(404).send("The request you are looking for doesn't exist")
})
module.exports = app