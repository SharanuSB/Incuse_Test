import mongoose from "mongoose"

export const setclientdb = async(req,res,next) =>{
    try{
        console.log("setclientdb")
        // mongoose.connection.close()
        const secondaryDbUrl = "mongodb://127.0.0.1:27017"
        const dbName = req.body.companyName
        const db = await mongoose.connect(`${secondaryDbUrl}/${dbName}`)
        console.log("connected to second DB")
        next()
    }catch(e){
        res.json(e)
    }
}