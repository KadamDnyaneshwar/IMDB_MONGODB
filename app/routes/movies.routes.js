module.exports = app => {
const movies = require("../controllers/movies.controller.js");
    var router = require("express").Router();
  
    // Create a new movies
    router.post("/add", movies.create);
  // Retrieve all movies
  router.get("/", movies.findAll);

  // Retrieve a single movies with id
  router.get("/:id", movies.findOne);

  // Update a movies with id
  router.put("/:id", movies.update);

  // Delete a movies with id
  router.delete("/:id",movies.delete);


app.use('/api/movies', router);
};
  

   
