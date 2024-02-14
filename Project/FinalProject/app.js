import Gallery from "./Gallery.js";

window.onload =  async () => {

    const request = await fetch("data.json");
    const response = await request.json();
    
    
    const gallery = new Gallery((item) => {
        console.log(item);
    });

    response.forEach(element => {
        // console.log(element);
        gallery.CreatePeaceOfArt(element);
        
    });

    // gallery.ShowPiecesOfArt();

}

