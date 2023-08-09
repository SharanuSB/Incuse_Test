import express from "express"
import configureDB  from "./config/database.js"
import cors from 'cors'
import router from "./config/routes.js"

const app = express()
const port = 3020

configureDB()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log("server is running at port",port)
})



