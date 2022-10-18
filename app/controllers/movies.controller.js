const db = require("../models");
const Movie =db.movies;

// Create and Save a new movie
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a movie
  const movies = new Movie({
    title: req.body.title,
    published_year: req.body.published_year,
    Runtime:req.body.Runtime,
    Genre:req.body.Genre,      //action ,funny,
    Website:req.body.Website,
    Poster:req.body.Poster,
    Language:req.body.Language,
    Awards:req.body.Awards,
    Relased :req.body.Relased , //13 dec 2022
    Boxoffice:req.body.Boxoffice,
    Musicby:req.body.Musicby,
    Budget:req.body.Budget,
    Actor_id:req.body.Actor_id,
    Director_id:req.body.Director_id,
    Production_id:req.body.Production_id,
    Writer_id:req.body.Writer_id,



  });

  // Save movie in the database
  movies
    .save(movies)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the movie."
      });
    });
};

// Retrieve all movie from the database.
exports.findAll = (req, res,next) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Movie.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movie."
      });
    });
};

// Find a single movie with an id
exports.findOne = (req, res) => {
  //console.log(req.parms.id)
  const id = req.params.id; 
  Movie.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found movie with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving movie with id=" + id });
    });
};

// Update a movie by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

 Movie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update movie with id=${id}. Maybe movie was not found!`
        });
      } else res.send({ message: "movie was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating movie with id=" + id
      });
    });
};

// Delete a movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Movie.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete movie with id=${id}. Maybe movie was not found!`
        });
      } else {
        res.send({
          message: "movie was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete movie with id=" + id
      });
    });
};
