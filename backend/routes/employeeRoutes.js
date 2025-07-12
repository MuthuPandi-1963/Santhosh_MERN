import {Router} from 'express'
import createEmployee from '../controllers/createEmployee.js';
import getEmployee from '../controllers/getEmployee.js';
import getEmployeeById from '../controllers/getEmployeeById.js';
import deleteEmployee from '../controllers/deleteEmployee.js';
import updateEmployeeById from '../controllers/updateEmployee.js';

const employeeRoutes = Router();

employeeRoutes.post("/create",createEmployee)
employeeRoutes.get("/get",getEmployee)
employeeRoutes.get("/get/:id",getEmployeeById)
employeeRoutes.delete("/:id",deleteEmployee);
employeeRoutes.put("/:id",updateEmployeeById);

export default employeeRoutes;