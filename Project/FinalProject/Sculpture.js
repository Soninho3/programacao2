import PeaceOfArt from "./PieceOfArt.js";
export default class Sculpture extends PeaceOfArt{
    callback;
    constructor(data, Callback){
        super(data, Callback);
        this.callback = Callback;
       
    }
   introduce(){
      return super.introduce();
   }
}