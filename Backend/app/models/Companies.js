import mongoose from "mongoose";

const {Schema} = mongoose

const companySchema = new Schema({

})

const Company = mongoose.model("Company", companySchema)

export default Company