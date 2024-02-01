export default class Animal {

    #callback;
    #imageElem;
    #data;
    constructor(data, callback){

        this.#data = data;
    
        
        this.#callback = callback;
        
        


        this.#imageElem = document.createElement("img");
     
        this.#imageElem.src = this.#data.image;
        img.onclick = () => this.#callback();
        
        const container = document.getElementById("#images-container");
        container.appendChild(img);
        

    }


    introduce(){
        return "hello , i'm a "+ this.#data.name;
    }
    get type(){

    }
    get image(){
        return this.#data.image;
    }
    get name(){
        return this.#data.name;
    }
    set name(elem){

        this.#data.name = elem;
    }
    get sound(){
        return this.#data.sound;
    }
    get active(){
        return this.#imageElem.className.length !== 0;
    }
    set active(value){


    }
}

/*


*/
