import mongoose from "mongoose";
import "dotenv/config"
export const ConnectDataBase = () =>{
    mongoose.connect("mongodb+srv://bharatshaligram:DcrwSjazlMZDDBIq@classbaseapi.romrgvm.mongodb.net/?retryWrites=true&w=majority&appName=ClassBaseAPI").then(()=>{
        console.log("Successfull Connection");
    }).catch((error)=>{
        console.log("Connection Failed");
        console.log(error);
    })
}