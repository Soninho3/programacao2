import Animal from "./Animal.js";
export default class Fish extends Animal{


    #isfreshwater;
    constructor(data, callback){
        super(data, callback);

        this.#isfreshwater = data.isfreshwater;


    }

    introduce(){

        let parentIntroduce = super.introduce();

        return this.#isfreshwater ? 
        parentIntroduce + " and i live in fresh water":
        parentIntroduce + " and i live in no fresh water";
    }
}

