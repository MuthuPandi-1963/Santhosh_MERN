import employeeModel from '../models/employee.js'
const createEmployee = async (req,res)=>{
    try {
        console.log(req.body);
        const newEmployee = await employeeModel.create(req.body)
        return res.status(201).json({
            data : newEmployee,
            success : true,
            message : "employee created Successfully"
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export default createEmployee;