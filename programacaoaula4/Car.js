
import Vehicle from "./Vehicle";

export default class Car extends Vehicle{
    
    constructor(){
        super();
        this.speed = 22;
        console.log("car speed -> ",this.speed);

    }
}
