const { Schema, model } = require("mongoose");
const { movies, production } = require(".");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title:{type:String,require:true},
      published_year: {type:String,require:true},
      Relased: {type:String,},
      Runtime: {type:String, require:true},
      Genre: {
        type: String,
        enum : ['Drama','Action','funny','Romance'],
        default: 'Drama'
    },
    Website: {type:String, require:true},
    Poster:{type:String},
    Language:{type:String,require:true},
    Awards:{type:String},
    Boxoffice:{type:String},
    Musicby:{type:String},
    Budget:{type:String},
    Actor_id:{type:Number},
    Director_id:{type:Number},
    Production_id:{type:Number},
    Writer_id:{type:Number}
    //Director:[{type:Schema.Types.ObjectId,ref:Director},]
   
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
//export const Director=model("director",DirecterSchema)


