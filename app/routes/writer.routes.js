module.exports = app => {
    const writer = require("../controllers/writer.controller.js");
        var router = require("express").Router(); 
       // Create a new writer
        router.post("/add", writer.create);
      // Retrieve all movies
      router.get("/", writer.findAll);
    
      // Retrieve a single writer with id
      router.get("/:id", writer.findOne);
    
      // Update a movies with id
      router.put("/:id", writer.update);
    
      // Delete a movies with id
      router.delete("/:id",writer.delete);
    
      app.use('/api/writer', router);
    };
      
    
       
    