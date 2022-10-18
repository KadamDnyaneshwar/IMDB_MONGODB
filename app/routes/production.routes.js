module.exports = app => {
    const production = require("../controllers/production.controllers.js");
        var router = require("express").Router(); 
       // Create a new production
        router.post("/add", production.create);
      // Retrieve all production
      router.get("/", production.findAll);
    
      // Retrieve a single production with id
      router.get("/:id", production.findOne);
    
      // Update a production with id
      router.put("/:id", production.update);
    
      // Delete a production with id
      router.delete("/:id",production.delete);
    
      app.use('/api/production', router);
    };
      
    
       
    