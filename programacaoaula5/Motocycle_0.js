import Vehicle from "./Vehicle_0.js";

export default class motorcycle extends Vehicle {
    constructor(data){
        super(data); 

        
        console.log("motorcycle speed ", this.speed);
    }
}