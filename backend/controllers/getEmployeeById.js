import employeeModel from "../models/employee.js"

const getEmployeeById = async(req,res)=>{
    try {
        const {id} = req.params
        const employeeData =await employeeModel.findById(id)
        return res.status(200).json({
            data : employeeData,
            success : true,
            message : "employee data fetched successfully"
        })
    } catch (error) {
        console.log(error);
        
    }
}
export default getEmployeeById;