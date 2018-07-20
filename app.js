const express = require("express");
const bodyParser = require("body-parser");

const commentsRoutes = require('./routes/comments')

const COMMENT_PATH = './models/';
const COMMENT_MODEL = 'comment.model.js';

const mongoose = require('mongoose');

let pass = '4LHLKB3o43lDctef';

const uri = 'mongodb+srv://Icarus:4LHLKB3o43lDctef@lantern-dragon-usbui.mongodb.net/comments?retryWrites=true';

mongoose.connect(uri)
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('Failed to connect to database');
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", commentsRoutes);

module.exports = app;
