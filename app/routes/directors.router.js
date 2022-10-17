module.exports = app => {
    const director = require("../controllers/directors.controller.js");
        var router = require("express").Router();
      
        // Create a new movies
        router.post("/add", director.create);
      // Retrieve all movies
      router.get("/", director.findAll);
    
      // Retrieve a single movies with id
      router.get("/:id", director.findOne);
    
      // Update a movies with id
      router.put("/:id", director.update);
    
      // Delete a movies with id
      router.delete("/:id",director.delete);
    
      app.use('/api/director', router);
    };
      
    
       
    