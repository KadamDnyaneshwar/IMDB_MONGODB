const express =require("express");

const cors=require("cors");


const app = express();
var corsOptions={
  origin:"htpp://localhost:3000"
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  const db=require("./app/models")
  db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to IMDB application." });
  });
  require("./app/routes/movies.routes")(app);
  require("./app/routes/directors.router")(app);
  require("./app/routes/actors.routes")(app);
  require("./app/routes/writer.routes")(app);
  // set port, listen for requests
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });