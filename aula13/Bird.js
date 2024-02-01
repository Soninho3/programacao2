import Animal from "./Animal.js";

export default class Bird extends Animal{
    
    #Canfly;
    constructor(data, callback){ 
        super(data, callback);

        this.#Canfly = data.canfly;
    }

    // fly(){
    //     return this.#Canfly ? 
    //     this.introduce() + " and i can fly":
    //     this.introduce() + " and i cannot fly";
    // }

    introduce(){
        let parentIntroduce = super.introduce();
        return this.#Canfly ? 
        parentIntroduce + "and i can fly":
        parentIntroduce + "and i cannot fly";
    }
}

/*

*/