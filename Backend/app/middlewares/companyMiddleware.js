import Company from '../models/Companies.js'

export const companyMiddleware = async(req, res, next) =>{
    try{  
        const { body } = req
        const company = await Company.findOne({companyName:body.companyName})
        if(company){
            res.json("company is already registered") 
        }else{
            next()
        }   
    }catch(e){
        res.json(e)
    }
}