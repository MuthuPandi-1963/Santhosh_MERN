import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : 18
    },
    position : {
        type : String,
        default : "Labour",
    },
    salary : {
        type : Number,
        default : 0
    }
},{timestamps : true})

const employeeModel = mongoose.model("employee",employeeSchema);

export default employeeModel;