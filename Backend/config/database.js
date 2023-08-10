import mongoose from 'mongoose'

const configureDB = async(dbName) =>{
    console.log("try")
    try{
        let db
        if(!dbName){
            db = await mongoose.connect('mongodb://127.0.0.1:27017/cmp')
            console.log("connected to db")
        }else{
            db = mongoose.createConnection().useDb(dbName)
            console.log(`connected to ${dbName} DB`)
        }
        console.log('db',db.name)
    }catch(e){
        console.log(e)
    }
}   

export default configureDB