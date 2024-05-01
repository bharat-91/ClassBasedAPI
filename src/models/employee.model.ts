import mongoose, {Model, Schema} from "mongoose";


export interface IEmployee {
    employeeName: string;
    employeeDesignation: string;
    employeeSalary: number,
    employeeJoinDate: Date;
    employeeExperience: number
}

const employeeSchema = new Schema<IEmployee>({
    employeeName:{
        type:String,
        required:[true, "Employee without name are not acceptable"],
        trim: true
    },
    employeeDesignation:{
        type:String,
        required: [true, "If working there so must have Designation"],
        trim: true
    },
    employeeSalary:{
        type:Number,
        required:[true, "Kuch to de"],
        trim: true
    },
    employeeJoinDate:{
        type:Date,
        required:[true, "Tu kab aaya"],
        trim: true
    },
    employeeExperience:{
        type:Number,
        required:[true, "Pehle Kaam Kiya he??"],
        trim: true,
        min:0,
        default: 0
    }
})


export const EmployeeSchema:Model<IEmployee> = mongoose.model<IEmployee>("EmployeeSchema", employeeSchema)