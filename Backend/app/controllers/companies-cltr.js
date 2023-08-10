import mongoose,{ Schema } from "mongoose"
import Company from "../models/Companies.js"
import configureDB from "../../config/database.js"

const companiesCltr = {}

companiesCltr.register = async(req, res) =>{
    const { body } = req 
    try{
        const data = await Company.create(body)

        const dbName = body.companyName.toLowerCase()

        const url = "mongodb://localhost:27017"

        const newDb = mongoose.createConnection(`${url}/${dbName}`)

        const newCompanySchema = new Schema({
            name:{
                type:String
            }
        })
        
        const newModel = newDb.model("Employee", newCompanySchema)
         
        await newModel.create({name:"sushil"})

        res.json("company created successfully")
    }catch(e){
        res.json(e)
    }
}

companiesCltr.signIn = async(req, res) =>{
    try{
        const { body } = req
        res.json(body.companyName)
    }catch(e){
        res.json(e)
    }
}

export default companiesCltr