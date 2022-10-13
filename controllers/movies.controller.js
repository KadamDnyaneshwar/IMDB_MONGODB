const db = require("./models");
const Movies = db.movies;

// Create and Save a new Tutorial
    exports.create = (req, res) => {
    // Validate request
    console.log("hii")
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Movies
    const movies = new Movies({
      title: req.body.title,
      published_year: req.body.published_year
    });
  
    // Save Movies in the database
    movies
      .save(movies)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};