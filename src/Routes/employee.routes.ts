import express,{Request,Response, Router} from 'express';
import { deleteEmployee, getAllEmployee,getEmployeeById,postEmployee, updateEmployee } from '../controller/employee.controller';


const empRouter:Router = express.Router()
empRouter.get('/getAllEmployee',getAllEmployee)
empRouter.get('/getEmployee/:id',getEmployeeById)
empRouter.post('/createEmployee',postEmployee)
empRouter.delete('/deleteEmployee/:id',deleteEmployee)
empRouter.put('/updateEmployee/:id',updateEmployee)

export default empRouter