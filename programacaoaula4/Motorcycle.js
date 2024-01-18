import Vehicle from "./Vehicle";

export default class motorcycle extends Vehicle {
    constructor(){
        super(); 

        this.speed = 50; 
        console.log("motorcycle speed ", this.speed);
    }
}