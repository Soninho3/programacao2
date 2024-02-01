
import Zoo from "./zoo.js";

window.onload = async () => {

    console.log(Zoo.ZooInfo());

    const request = await fetch("data.json");
    const result = await request.json();
    
    const zoo = new Zoo(()=> {
        console.log("zoo event");
    });
    result.forEach(item => {
        zoo.AddAnimal(item);
    });
   

    zoo.ShowAnimals();

}



/*

====================
       yesn't 
====================

*/