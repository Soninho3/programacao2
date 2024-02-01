import Animal from "./Animal.js";

export default class Insect extends Animal{
    #bloodsucking;
    constructor(data, callback){

        this.#bloodsucking = data.bloodsucking;


    }

    introduce(){
        parentIntroduce = super.introduce;

        return this.#bloodsucking? 
        parentIntroduce + " and i am blood-sucking":
        parentIntroduce + " and i am not blood-sucking";

    }
}