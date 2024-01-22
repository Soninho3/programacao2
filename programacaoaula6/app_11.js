// import Car from "./Car_11.js";

// import motorcycle from "./Motorcycle.js";

// const data = {
//     cars: [
//         {
//             brand : "ferrari",
//             speed: 200,
//         }, 
//         {
//             brand: "fiat",
//             speed: "50",
//         },

//     ],
//     motocycles : [
//         {
//             brand : "duccatti",
//             speed: 400,
//         },
//         {
//             brand : "kawazaki",
//             speed : 500,
//         },
//     ],

// }
// const vehicles = [];
// window.onload = () => {
//     console.log("live reloaded enable");

//     const nav = document.querySelector("nav"); // or #menu for ids
//     console.log(nav);

//     const createUL = (name, data) => {
//        const ul = document.createElement("ul");
//        const title = document.createElement("li");
//        title.innerText = name; 
//        ul.appendChild(title);
       
//        data.forEach((element) => {
//         const li = document.createElement("li");
//         const button = document.createElement("button"); 
//         button.onclick = (event) => {
//             console.log(data);
//             switch(name){
//                 case "cars": 
//                     vehicles.push(new Car(element));
//                   break;

//                 case "motocycles":
//                     vehicles.push(new motorcycle(element));
                
//                   break;

//                 default:
//                     break;
//             }
//             console.log(event.target.innerText);
//         }
//         button.innerText = element.brand; 
//         li.append(button);
//         ul.append(li);

//       });
//        nav.appendChild(ul);
//     };
        
//        //build layout 

//       for(const key in data){
//          //console.log(key);
//          createUL(key, data[key]);
//     }       
// }

import Car from "./Car_11.js";
import motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";



const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();
    
    return result;

}
const createLIContent = (item)  => {
    
    const button = document.createElement("button");
    button.innerText = item.brand;

    button.onclick = () => {
        switch(item.type){
            case "car":
                new Car(item);

                break;
            case "motorcycle":
                new motorcycle(item);
                break;
            case "boat":
                new Boat(item);
                break;
        }
    }
    
    return button;
}
const createList = (data) => {
    const ul = document.querySelector("ul");
    data.ForEach(item => {
        const li = document.createElement("li");
        li.appendChild(createLIContent(item))
        ul.appendChild(li);    
    });

}

window.onload = async () => {
    
    const data = await loadData("data.json");
    const sortedData = data.sort((a, b) => a.type.localeCompare(b.type));


    
    const ul = createList(data);

}
