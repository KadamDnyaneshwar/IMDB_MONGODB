module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: {type:String, require:true},
      published_year: {type:String,require:true},
      Relased: {type:String,},
      Runtime: {type:String, require:true},
      Genre: {
        type: String,
        enum : ['Drama','Action','funny','Romance'],
        default: 'Drama'
    },
    Director: {type:String, require:true},
    Writer: {type:String, require:true},
    Actore: {type:String, require:true},
    },
    { timestamps: true }
  );


  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Movie = mongoose.model("movies", schema);
  return Movie;
};