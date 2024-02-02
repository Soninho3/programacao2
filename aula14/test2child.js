import test2 from "./test2.js";

export default class childClasstest2 extends test2{

    constructor(name){
        super(name);
    }

    sayhi(){
        return "hi, i am "+ super.sayhello();
    }

}