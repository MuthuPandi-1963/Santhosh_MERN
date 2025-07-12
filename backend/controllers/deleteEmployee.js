import employeeModel from "../models/employee.js"

const deleteEmployee = async(req,res)=>{
    try {
        const {id} = req.params
        const employeeData =await employeeModel.findById(id)
        if(!employeeData){
            return res.json({
                message : "id not found"
            })
        }
        await employeeData.deleteOne();
        return res.status(200).json({
            success : true,
            message : "employee deleted successfully"
        })
    } catch (error) {
        console.log(error);
        
    }
}
export default deleteEmployee;