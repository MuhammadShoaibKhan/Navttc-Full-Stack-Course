import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    
  },
  {
    timestamp: true,
  }
)

adminSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

adminSchema.pre('save', async function (next){

    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});


const Admin = mongoose.model('Admin', adminSchema);
export default Admin;


// mongodb+srv://shoaib:12345@cluster0.i17dz.mongodb.net/