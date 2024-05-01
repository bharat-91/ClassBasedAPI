export class ErrorClass{

    errorHelper = (error:any): string =>{
       let errorMessage = ''
       if(error.name == "CastError"){
        return errorMessage = 'ID CHECK KAR KE BHEJ'
       }
   
       for(const key in error.errors){
           errorMessage+=error.errors[key].message;
           errorMessage+=", "
       }
       return errorMessage.slice(0, errorMessage.length-2)
   }
}