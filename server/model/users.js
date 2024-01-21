import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    firstname: {type:String,trim:true,require:true,max:16} ,
    lastname: {type:String,trim:true,require:true,max:16},
    username: {type:String,index:true, trim:true,unique:true,require:true},
    email:{type:String,trim:true,unique:true,require:true,lowercase:true} ,
    password: {type:String,require:true},
    phone: {type:String,require:true}
})
const user = mongoose.model('user',UserSchema);

export default user; 

