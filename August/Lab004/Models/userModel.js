const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    color:{
        type:String,
        require: true
    },
    category:{
        type:String,
        required: true
    }
},
{
    timestamps: true,
}
)



//const User = mongoose.model('User',userSchema);
//export default User;

module.exports = mongoose.model('User',userSchema);

