import {Router} from 'express'
import createEmployee from '../controllers/createEmployee.js';
import getEmployee from '../controllers/getEmployee.js';
import getEmployeeById from '../controllers/getEmployeeById.js';

const employeeRoutes = Router();

employeeRoutes.post("/create",createEmployee)
employeeRoutes.get("/get",getEmployee)
employeeRoutes.get("/get/:id",getEmployeeById)

export default employeeRoutes;