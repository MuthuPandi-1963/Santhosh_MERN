import employeeModel from "../models/employee.js"

const getEmployee = async(req,res)=>{
    try {
        const employeeData =await employeeModel.find()
        return res.status(200).json({
            data : employeeData,
            success : true,
            message : "employee data fetched successfully"
        })
    } catch (error) {
        console.log(error);
        
    }
}
export default getEmployee;