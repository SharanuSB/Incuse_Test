import configureDB from "../../config/database.js"
import Company from "../models/Companies.js"

export const clientListener = async(req, res, next) =>{
    try{
        const { body } = req
        console.log("clientListener")
        const company = await Company.findOne({companyName:body.companyName}) 
        if(company){
            configureDB(body.companyName.toLowerCase())
            //main subdomain in sessionStorage
            next()
        }else{
            res.json({error:`Company ${body.companyName} not registered`})
        }
    }catch(e){
        res.json(e)
    }
}