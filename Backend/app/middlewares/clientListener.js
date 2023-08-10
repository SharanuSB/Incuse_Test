import Company from "../models/Companies.js"

export const clientListener = async(req, res, next) =>{
    try{
        const { body } = req
        console.log("body",body)   
        console.log("clientListener")
        const company = await Company.findOne({companyName:body.companyName}) 
        if(company){
            console.log("welcome",company)
            localStorage.setItem("subDomain",JSON.stringify(company.companyName))
            next()
        }else{
            res.json("company not registered")
        }
    }catch(e){
        res.json(e)
    }
}