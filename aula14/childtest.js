import Maintest from "./main.js";

export default class extends Maintest{
    constructor(name){
        super(name)
    }

    saytome(){
    
        return "hi "+ super.saytome();
    }
}
