import Bird from "./Bird";
import Mammal from "./Mammal";
import Reptile from "./Reptile";


export default class Zoo {

    #animals;
    #callback
    constructor(callback){
        this.#animals = [];
        this.#callback = callback;
        
    }

    AddAnimal(animal){
        switch(item.type){
            case "bird": 
              this.#animals.push(new Bird(animal));
               break;
            case "mammal":
                this.#animals.push(new Mammal(animal));
                break;
            case "reptile":
                this.#animals.push(new Reptile(animal));
            default:
                break;
        }
        

    }
    ShowAnimals(){
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        });

    }
    getAnimal(name){
       
        return this.#animals.find(animal => animal.name === name);
    }

    static ZooInfo(){
        return " Zoo is a place to display animals "
    }
}

