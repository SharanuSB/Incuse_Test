import mongoose from 'mongoose'

const configureDB = async() =>{
    try{
        const DB = await mongoose.connect('mongodb://127.0.0.1:27017/cmp')
        console.log("connected to db")
    }catch(e){
        console.log(e)
    }
}   

export default configureDB