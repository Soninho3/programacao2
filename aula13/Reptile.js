import Animal from "./Animal.js";
export default class Reptile extends Animal{
    
    #IsAgressive;
    constructor(data, callback){
        super(data, callback);

        this.#IsAgressive = data.isagressive;
    }

    // bite(){
    //     return this.#IsAgressive ? 
    //     this.introduce() + " and i'm agressive":
    //     th
    //     is.introduce() + " and i'm not agressive";
    // }
    
    introduce(){
        let parentIntroduce = super.introduce();


        return this.#IsAgressive ? 
        parentIntroduce + " and i am agressive":
        parentIntroduce + " and i am peaceful";
    }
}