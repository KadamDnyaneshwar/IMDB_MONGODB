//make Director module
const { DirecterSchema } = require("mongoose");
module.exports = mongoose => {
    var DirecterSchema = mongoose.Schema(
      {
        Director_id:{type:Number,require:true},
        Director_name: {type:String, require:true},
    
     // movies:[{type:Schema.Types.ObjectId,ref:movies},]
     
      },
     
      { timestamps: true }
    );
    DirecterSchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    
    });
  
    const Director = mongoose.model("Director", DirecterSchema);
    return Director;
  };
  