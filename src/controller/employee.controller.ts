import { Request,Response } from "express"
import { EmployeeSchema, IEmployee } from '../models/employee.model';
import { ErrorClass } from "../helper/errorHelper";
import { employeeService } from '../service/employee.service';

let errorObj = new ErrorClass()
let employeeServiceObj = new employeeService
export const getAllEmployee = (req:Request, res:Response) => {
    employeeServiceObj.GetAllEmployee
}   

export const getEmployeeById = (req:Request, res:Response) => {
    employeeServiceObj.getEmployeeById
}

export const postEmployee = (req:Request,res:Response) =>{
    employeeServiceObj.postEmployee
}

export const deleteEmployee = (req:Request, res:Response)=>{
    employeeServiceObj.deleteEmployee
}

export const updateEmployee = (req:Request, res:Response) => {
    employeeServiceObj.updateEmployee
}