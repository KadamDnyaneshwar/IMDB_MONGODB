module.exports = app => {
    const actor = require("../controllers/actors.controller.js");
        var router = require("express").Router();
      
        // Create a new movies
        router.post("/add", actor.create);
      // Retrieve all movies
      router.get("/", actor.findAll);
    
      // Retrieve a single movies with id
      router.get("/:id", actor.findOne);
    
      // Update a movies with id
      router.put("/:id", actor.update);
    
      // Delete a movies with id
      router.delete("/:id",actor.delete);
    
      app.use('/api/actor', router);
    };
      
    
       
    