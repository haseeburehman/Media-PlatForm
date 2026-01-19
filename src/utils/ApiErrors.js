class ApiErrors extends Error{
    constructor(message,statusCode,errors=[],stack=""){
        super(message);
        this.statusCode=statusCode;
        this.errors=errors;
        this.stack=stack;
        this.success=false;
        this.message=message;

        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}
export default ApiErrors;