import Sculpture from "./Sculpture.js";
import Painting from "./painting.js";
import Photography from "./photography.js";

export default class Gallery{
    ListOfArtPieces = [];
    callback;
    constructor(Callback){
        
        this.callback = Callback;
        
    }

    CreatePeaceOfArt(Data){
        let ArtpieceTemporary = null;
        switch(Data.type){
            case "sculpture":
                ArtpieceTemporary = new Sculpture(Data, this.callback);
                break;
            case "photograph":
                ArtpieceTemporary = new Photography(Data, this.callback);
                break;
            case "painting":
                ArtpieceTemporary = new Painting(Data, this.callback);
                break;
            default:
                break;
        }
        this.ListOfArtPieces.push(ArtpieceTemporary);
    }

    ShowPiecesOfArt(){
        this.ListOfArtPieces.forEach(element => {
            console.log(element);
        });
    }
    
} 