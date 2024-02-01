import Animal from "./Animal.js";
export default class Reptile extends Animal{
    
    #IsAgressive;
    constructor({name, isagressive, callback}){
        super(name, callback);

        this.#IsAgressive = isagressive;
    }

    bite(){
        return this.#IsAgressive ? 
        this.introduce() + " and i'm agressive":
        this.introduce() + " and i'm not agressive";
    }
}