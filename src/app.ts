import { ConnectDataBase } from "./db/dbConfig";
import express,{Response,Request,Express} from 'express'
import 'dotenv/config'
import empRouter from "./Routes/employee.routes";


const app = express()

app.use(express.json())
ConnectDataBase()

app.listen(process.env.PORT_NUMBER, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT_NUMBER}`);
})

app.use('/employee',empRouter)