import employeeModel from "../models/employee.js"

const updateEmployeeById = async(req,res)=>{
    try {
        const {id} = req.params
        const {name,age,salary,position} = req.body
        const employeeData =await employeeModel.findById(id)
        employeeData.name = name 
        employeeData.age = age 
        employeeData.salary = salary 
        employeeData.position = position
        await employeeData.save();
        return res.status(200).json({
            data : employeeData,
            success : true,
            message : "employee updated successfully"
        })
    } catch (error) {
        console.log(error);
        
    }
}
export default updateEmployeeById;