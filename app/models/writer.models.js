//make Director module
const { WriterSchema } = require("mongoose");
module.exports = mongoose => {
    var WriterSchema = mongoose.Schema(
      {
        Writer_id:[Number],
        Writer_name: {type:String, require:true},
    
     // movies:[{type:Schema.Types.ObjectId,ref:movies},]
     
      },
     
      { timestamps: true }
    );
    WriterSchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    
    });
  
    const Writer = mongoose.model("Writer", WriterSchema);
    return Writer;

  };
  