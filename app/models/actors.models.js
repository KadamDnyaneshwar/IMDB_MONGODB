//make Actor module
const { ActorSchema } = require("mongoose");
module.exports = mongoose => {
    var ActorSchema = mongoose.Schema(
      {
        Actor_id:[Number],
        Actor_name: {type:String, require:true},
    
     // movies:[{type:Schema.Types.ObjectId,ref:movies},]
     
      },
     
      { timestamps: true }
    
    );
    ActorSchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    
    });
  
    const Actor = mongoose.model("Actor", ActorSchema);
    return Actor;

  };
  