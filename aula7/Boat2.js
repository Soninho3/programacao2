import Vehicle from "./Vehicle_22.js";

export default class Boat extends Vehicle{
    
    constructor(data){
        super(data);
        
        console.log(this.brand, this.speed);

    }
} 