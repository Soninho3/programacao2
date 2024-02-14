import PeaceOfArt from "./PieceOfArt.js";
export default class Photography extends PeaceOfArt{
    callback;
    constructor(data, Callback){
        super(data, Callback);
        this.callback = Callback;
    }
    introduce(){
       return  super.introduce();
    }
}