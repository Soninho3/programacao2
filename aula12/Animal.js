export default class Animal {
    #name;
    #callback;

    constructor({name, image}, callback){

        this.#name = name;
        
        this.#callback = callback;
        console.log(image);

        const img = document.createElement("img");
     
        img.src = image;
        img.onclick = () => this.#callback();
        
        const container = document.getElementById("#images-container");
        container.appendChild(img);
        

    }


    introduce(){
        return "hello , i'm a "+ this.#name;
    }
    get name(){
        return this.#name;

    }
    set name(e){

    }
}

/*

*/
