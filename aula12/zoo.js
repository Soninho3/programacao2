import Bird from "./Bird";
import Mammal from "./Mammal";
import Reptile from "./Reptile";


export default class Zoo {

    #animals;
    #callback
    #currentAnimal;
    #imageElem;
    constructor(callback){
        this.#animals = [];
        this.#callback = callback;
        this.#imageElem = document.querySelector();
        
    }

    AddAnimal(animal){
        switch(item.type){
            case "bird": 
              this.#animals.push(new Bird(animal, () => this.#performAnimal(animal)));
               break;
            case "mammal":
                this.#animals.push(new Mammal(animal, () => this.#performAnimal(animal)));
                break;
            case "reptile":
                this.#animals.push(new Reptile(animal, () => this.#performAnimal(animal)));
            default:
                break;
        }
        

    }
    #performAnimal(animal){

        if(this.#currentAnimal){
            this.#currentAnimal.active = false;
        }
        document.querySelector("h2").innerText = this.#currentAnimal;
        this.#currentAnimal = this.#animals.find(anim => anim.name === animal.name);
        this.#callback(animal);
    }
    ShowAnimals(){
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        });

    }
    getAnimal(name){
       
        return this.#animals.find(animal => animal.name === name);
    }
    set active(){
       
    }
    get active (){
        
    }
}

