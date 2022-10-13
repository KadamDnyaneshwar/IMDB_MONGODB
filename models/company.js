const mongoose=require("mongoose");


const companySchema= new mongoose.Schema({
company_name:{
    type: String,trim :true
},
})
module.exports = mongoose.model("company", companySchema)
   