import { Request,Response } from "express"
import { EmployeeSchema, IEmployee } from '../models/employee.model';
import { ErrorClass } from "../helper/errorHelper";
let errorObj = new ErrorClass()

export class employeeService{
    GetAllEmployee = async (req:Request, res:Response) =>{
        try{
            const employee = await EmployeeSchema.find()
            res.status(200).json(employee)
        }catch(error){
            res.status(501).json({message: "Internal Server Error"})
        }
    }

    getEmployeeById = async(req:Request, res:Response)=> {
        const {id} = req.params
        const employee = await EmployeeSchema.findById(id)
        res.status(200).json(employee)
    }

    postEmployee = async(req:Request, res:Response) =>{
        try{
            let employee:IEmployee = await EmployeeSchema.create(req.body) 
            res.status(200).json({message: "Data inserted Successfully:- ", employee})
        }catch(error){
            let message:string = errorObj.errorHelper(error)
            res.json({message})
        }
    }

    deleteEmployee = async (req:Request, res:Response) =>{
        try{
            let { id  } = req.params;
            const employee = await EmployeeSchema.findByIdAndDelete(id);
            res.status(200).json({message: "Employee Delete:- ", employee}) 
        }catch(error){
            console.log(error);
            
            let errorMessage:string = errorObj.errorHelper(error)
            res.json({errorMessage})
        }
    }

    updateEmployee = async (req:Request, res:Response) =>{
        try{
            let {id} = req.params
            console.log(id);
            const employee = await EmployeeSchema.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Employee Data Updated Successfully:- ", employee})
            
        }catch(error){
            let errorMessage = errorObj.errorHelper(error)
            res.json({errorMessage})
        }
    }
}