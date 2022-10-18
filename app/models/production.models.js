//make Director module
const { ProductionSchema } = require("mongoose");
module.exports = mongoose => {
    var ProductionSchema = mongoose.Schema(
      {
        Production_id:{type:Number,require:true},
        Production_name: {type:String, require:true},
    
     // movies:[{type:Schema.Types.ObjectId,ref:movies},]
     
      },
     
      { timestamps: true }
    );
    ProductionSchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    
    });
  
    const Production = mongoose.model("Production", ProductionSchema);
    return Production;

  };
  