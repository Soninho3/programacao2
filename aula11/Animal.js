export default class Animal {
    #name;
    #Canfly;
    #callback;
    constructor(name, canfly, image, callback){

        this.#name = name;
        this.#Canfly = canfly;
        this.#callback = callback;
        console.log(image);

        const img = document.createElement("img");
        img.src = image;
        img.onclick = () => this.#callback();
        document.body.appendChild(img);

    }


    introduce(){
        return "hello , i'm a "+ this.#name;
    }
    fly(){
        return this.#Canfly ? this.introduce() + " and i can fly":
        this.introduce() + " and i cannot fly";
    }
    get name(){
        return this.#name;

    }
    set name(e){

    }
}
/*
a a a a
a a a a 
a a a a
a a a a
a a a a
*/