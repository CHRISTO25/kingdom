import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    idName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
       
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    job:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profile_image:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema)

export default User;
