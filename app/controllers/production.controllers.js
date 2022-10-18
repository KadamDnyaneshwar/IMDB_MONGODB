const db = require("../models");
const Production =db.production;

// Create and Save a new Writer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Production_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Writer
  const production = new Production({
    Production_id:req.body.Production_id,
    Production_name: req.body.Production_name,
    

  });

  // Save movie in the database
  production
    .save( production)
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
  const Production_name = req.query.Production_name;
  var condition = Production_name ? { Production_name: { $regex: new RegExp(Production_name), $options: "i" } } : {};

  Production.find(condition)
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
  Production.findById(id)
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

// Update a Production by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Production.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Production with id=${id}. Maybe Production was not found!`
        });
      } else res.send({ message: "Production was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Production with id=" + id
      });
    });
};

// Delete a movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Production.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Production with id=${id}. Maybe Production was not found!`
        });
      } else {
        res.send({
          message: "Production was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Production with id=" + id
      });
    });
};
