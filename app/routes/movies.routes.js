module.exports = app => {
const movies = require("../controllers/movies.controller.js");
  console.log("in route---")
    var router = require("express").Router();
  
    // Create a new movies
    router.post("/add", movies.create);

    app.use('/api/movies', router);
  
   
  };