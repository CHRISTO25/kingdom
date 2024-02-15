import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    job_image:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true

})

const Jobs = mongoose.model('Jobs',jobSchema)

export default Jobs