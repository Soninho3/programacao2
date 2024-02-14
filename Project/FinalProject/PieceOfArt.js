export default class PeaceOfArt{
    title;
    artist;
    image;
    callback;
    data;
    Button;
    divsmall;
    constructor(data, Callback){
        
        this.title = data.title;
        this.artist = data.artist;
        this.callback = Callback;
        this.data = data;
        
       
        this.PicCreation();

        this.image.onclick = () => {
           this.callback(this.data);
            // console.log(this.introduce());
            // console.log(this.data);

        }
        this.Button.onclick = () => {

            if(this.Button.innerText == "info"){
                this.divsmall.innerText = this.introduce();
                this.Button.innerText = "hide";
            }else{
                this.divsmall.innerText = "";
                this.Button.innerText = "info";
            }
        } 
       
    }

     PicCreation(){
        this.image = document.createElement('img');
        this.image.src = this.data.image;
        
        let div = document.createElement('div');
        div.className = "bigdiv";
        
        this.Button = document.createElement('button');
        this.Button.innerText = "info";
        
        this.divsmall = document.createElement('div');
        this.divsmall.style.color = "white";
        this.divsmall.className = "smalldiv";


        div.appendChild(this.image);
        div.appendChild(this.divsmall);
        div.appendChild(this.Button);
        document.body.appendChild(div);
        this.CreateBreak();
        

    }

    introduce(){ 
        return this.title+" by "+ this.artist;
    }

    CreateBreak(){
        let some = document.createElement('br');
        document.body.appendChild(some);
    }

    get title(){
        return this.title;

    }
}