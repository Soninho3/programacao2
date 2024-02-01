import Bird from "./Bird";
import Mammal from "./Mammal";
import Reptile from "./Reptile";
import Fish from "./Fish.js";


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

        let nextAnimal = null;
        switch(item.type){
            case "bird": 
            //  this.#animals.push(new Bird(animal, () => this.#performAnimal(animal)));
              nextAnimal = new Bird(animal, () => this.#performAnimal(nextAnimal));
               break;
            case "mammal":
                // this.#animals.push(new Mammal(animal, () => this.#performAnimal(animal)));
                nextAnimal = new Mammal(animal, () => this.#performAnimal(nextAnimal));
                break;
            case "reptile":
                // this.#animals.push(new Reptile(animal, () => this.#performAnimal(animal)));
                nextAnimal = new Reptile(animal, () => this.#performAnimal(nextAnimal));
            case "fish":
                //
                nextAnimal = new Fish(animal, () => this.#performAnimal(nextAnimal));
            default:
                break;
        }

        this.#animals.push(nextAnimal)
        

    }
    #performAnimal(animal){

        if(this.#currentAnimal){
            this.#currentAnimal.active = false;
        }
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
    // set active(){
       
    // }
    // get active (){
        
    // }
}

