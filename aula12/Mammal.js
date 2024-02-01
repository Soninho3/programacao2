import Animal from "./Animal.js";

export default class Mammal extends Animal{
    
    #numLegs;
    
    constructor(data, callback){
        super(data, callback);

        this.#numLegs = data.numlegs;
    }

    walk(){
        return this.introduce() + " walking on "+ this.#numLegs +" legs";
    }
}