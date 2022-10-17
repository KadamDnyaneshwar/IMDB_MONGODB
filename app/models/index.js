const dbConfig = require("../config/db.config");


  
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.movies = require("./movies.models.js")(mongoose);
db.directors=require("./directors.models.js")(mongoose);
db.actors=require("./actors.models.js")(mongoose);
db.writer=require("./writer.models.js")(mongoose);
module.exports = db;