const mongoose=require("mongoose");
const movies =require("./movies");
const genre = require("./genre");
mongoose.connect("mongodb://localhost:27017/IMDB_movies",{
        useNewUrlParser:true,useUnifiedTopology:true
        },(err)=>{
            if(err)
            {
             console.log(err)
            }else
            {
            console.log("connection sucefully")
            }
        })
       
const Movies =new movies( {title:"jaiho",date:Date})
Movies.save().then(() => console.log("usersave"))
 

const Genre=new genre({role:"action"})
Genre.save().then(()=>console.log("save data"))