const dbConfig = require("../config/db.config");


  
const mongoose = require("mongoose");
const { request } = require("http");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.movies = require("./movies.models.js")(mongoose);
db.directors=require("./directors.models.js")(mongoose);
db.actors=require("./actors.models.js")(mongoose);
db.writer=require("./writer.models.js")(mongoose);
db.production=require("./production.models.js")(mongoose);
module.exports = db;