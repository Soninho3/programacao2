import Car from "./car_0.js";

import motorcycle from "./Motocycle_0.js";

const data = {
    cars: [
        {
            brand : "ferrari",
            speed: 200,
        }, 
        {
            brand: "fiat",
            speed: "50",
        },

    ],
    motocycles : [
        {
            brand : "duccatti",
            speed: 400,
        },
        {
            brand : "kawazaki",
            speed : 500,
        },
    ],

}
const vehicles = [];
window.onload = () => {
    console.log("live reloaded enable");

    const nav = document.querySelector("nav"); // or #menu for ids
    console.log(nav);

    const createUL = (name, data) => {
       const ul = document.createElement("ul");
       const title = document.createElement("li");
       title.innerText = name; 
       ul.appendChild(title);
       
       data.forEach((element) => {
        const li = document.createElement("li");
        const button = document.createElement("button"); 
        button.onclick = (event) => {
            console.log(data);
            switch(name){
                case "cars": 
                    vehicles.push(new Car(element));
                  break;

                case "motocycles":
                    vehicles.push(new motorcycle(element));
                
                  break;

                default:
                    break;
            }
            console.log(event.target.innerText);
        }
        button.innerText = element.brand; 
        li.append(button);
        ul.append(li);

      });
       nav.appendChild(ul);
    };
        
       //build layout 

      for(const key in data){
         //console.log(key);
         createUL(key, data[key]);
    }       
}



   //build layout 

//const car = new Car(); 
//const motobike = new motorcycle();

