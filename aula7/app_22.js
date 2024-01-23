import Car from "./Car_22.js";
import motorcycle from "./Motocycle_22.js";
import Boat from "./Boat2.js";


let currentVehicle;

const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();
    
    return result;

}
const createLIContent = (item)  => {
    
    const button = document.createElement("button");
    button.innerText = item.brand;
    
   
 

     button.onclick = () => {

        if(PlayButton.className === "inactive"){
            PlayButton.className = "";
        }


        if(currentVehicle){
            currentVehicle.destroy();
        }
   
        switch(item.type){
            case "car":
                currentVehicle = new Car(item);

                break;
            case "motorcycle":
                currentVehicle = new motorcycle(item);

                break;
            case "boat":
              currentVehicle =  new Boat(item);

                break;
        }
        console.log(currentVehicle);
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
isplaying = null;
let PlayButton;

const animate = () => {
    currentVehicle.animate();
    isplaying = requestAnimationFrame(animate);
}

const playAnimation = () => {
    isplaying = requestAnimationFrame(animate);
    console.log(isplaying);
    PlayButton.innerText = "stop";
    PlayButton.className = "red";

}
const stopAnimation = () => {
    cancelAnimationFrame(isplaying);
    isplaying = null; 
    PlayButton.innerText = "play"; 
    PlayButton.className = "green";

}

window.addEventListener("load", async  () => {
    const data = await loadData("data.json");
    data.sort((a, b) => a.type.localeCompare(b.type));
   
    const ul = createList(data);
     
    let isplaying = null;
    PlayButton = document.querySelector("#playpause");
    PlayButton.onclick = () =>{
        if(isplaying){
            stopAnimation();
           
        }else {
            playAnimation();
        }
    }


   setInterval(() => {
    console.log("new animation frame");
   }, 1000);
})

