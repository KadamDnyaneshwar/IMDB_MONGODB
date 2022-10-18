const db = require("../models");
const Writer =db.writer;

// Create and Save a new Writer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Writer_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Writer
  const writer = new Writer({
    Writer_id:req.body.Writer_id,
    Writer_name: req.body.Writer_name,
    

  });

  // Save movie in the database
  writer
    .save(writer)
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
exports.findAll = (req, res) => {
  const Writer_name = req.query.Writer_name;
  var condition = Writer_name ? { Writer_name: { $regex: new RegExp(Writer_name), $options: "i" } } : {};

  Writer.find(condition)
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
  Writer.findById(id)
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

  Writer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Writer.findByIdAndRemove(id, { useFindAndModify: false })
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
