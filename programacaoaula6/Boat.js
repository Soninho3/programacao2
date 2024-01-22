import Vehicle from "./Vehicle_11.js";

export default class Boat extends Vehicle{
    
    constructor(data){
        super(data);
        
        console.log(this.brand, this.speed);

    }
} 