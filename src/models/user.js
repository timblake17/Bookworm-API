import mongoose from "mongoose";

//todo add uniqueness and email validations

const schema = new mongoose.Schema({
  email: { type: String, required:true, lowercase:true, index:true },
  passwordHash: { type:String, required:true}
},
{timestamps: true}
);

export default mongoose.model('User', schema);
