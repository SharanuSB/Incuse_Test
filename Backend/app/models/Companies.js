import mongoose from "mongoose";

const { Schema } = mongoose

const companySchema = new Schema({     
    companyName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:128
    }
})

const Company = mongoose.model("Company", companySchema)

export default Company