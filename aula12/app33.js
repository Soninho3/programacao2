import Zoo from "./zoo.js";
import AudioPlayer from "./AudioPlayer.js";

window.onload = async () => {

    console.log(Zoo.ZooInfo());

    const request = await fetch("data.json");
    const result = await request.json();
    
    const zoo = new Zoo((animal)=> {
        console.log("zoo event", animal);
        audioplayer.play(animal.sound);
    });
    result.forEach(item => {
        zoo.AddAnimal(item);
    });
   

    zoo.ShowAnimals();

    const audioplayer = new AudioPlayer();

}

