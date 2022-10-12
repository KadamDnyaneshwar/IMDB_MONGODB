 
const mongoose=require("mongoose");

const  moviesSchema = new mongoose.Schema({
    title: {
    type: String, trim: true 
    },
    product_date:{
      type: String, default: Date 
    }
    
})

module.exports = mongoose.model("movies", moviesSchema)

