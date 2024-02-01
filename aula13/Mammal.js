import Animal from "./Animal.js";

export default class Mammal extends Animal{
    
    #numLegs;
    
    constructor(data, callback){
        super(data, callback);

        this.#numLegs = data.numlegs;
    }

    // walk(){
    //     let parentIntroduce = super.introduce();
    //     return this.introduce() + " walking on "+ this.#numLegs +" legs";
    // }
    
    introduce(){
        let parentIntroduce = super.introduce();

        return parentIntroduce + " walking on" + this.#numLegs + " legs";
    }
}