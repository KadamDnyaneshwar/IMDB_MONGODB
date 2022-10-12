const mongoose=require("mongoose");
const  genreSchema = new mongoose.Schema({
    Roll: {
       type: String, trim: true 
       },   
       
   })
   
   module.exports = mongoose.model("genre", genreSchema)
   