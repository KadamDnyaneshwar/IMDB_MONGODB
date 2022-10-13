const mongoose=require("mongoose");
const  genreSchema = new mongoose.Schema({
    Roll: [{
        type: String,
        enum: ['Action', 'Adventure', 'funny', 'Horrer']
      }],
      default: ['Action']
   })
   
   module.exports = mongoose.model("genre", genreSchema)
   