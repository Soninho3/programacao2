import Vehicle from "./Vehicle_22.js";

 export default class Car extends Vehicle{
    
    constructor(data){
        super(data);
        
        console.log("car speed -> ",this.speed);

    }
 } 