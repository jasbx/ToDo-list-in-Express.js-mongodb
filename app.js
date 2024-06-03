const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
app.use(express.static('public'))
app.set('view engine' ,'ejs');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }));

const router= require('./route/TaskRoute')

app.use(router)
const port = 3000;

mongoose.connect("mongodb+srv://gloop216:t6OwXxDJu1KR9YA3@cluster0.nryicsp.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}/`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
//get data from db
 

//===================================
  
//refresh fildes
 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});