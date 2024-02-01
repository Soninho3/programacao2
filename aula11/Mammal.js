import Animal from "./Animal.js";

export default class Mammal extends Animal{
    
    #numLegs;
    
    constructor({name, numlegs}, callback){
        super(name, callback);

        this.#numLegs = numlegs;
    }

    walk(){
        return this.introduce() + " walking on "+ this.#numLegs +" legs";
    }
}