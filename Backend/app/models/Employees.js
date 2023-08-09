import mongoose from "mongoose"

const {Schema} = mongoose

const employeeSchema = new Schema({

})

const Employee = mongoose.model("Employee", employeeSchema)

export default Employee