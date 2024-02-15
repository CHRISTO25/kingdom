import mongoose from "mongoose";


const companySchema = mongoose.Schema({
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
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
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
    },
    position:{
        type:String,
        default:"Company"
    }
},{
    timestamps:true
})

const Company = mongoose.model('Company',companySchema)

export default Company;
