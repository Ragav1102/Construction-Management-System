const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    name:   String,
    phone: String,
    email:   String,
    password:   String
});


const UserModel=mongoose.model("user",userSchema)
module.exports=UserModel;