export default class Vehicle{
    speed = 10;
    brand;
    imagePath;

    constructor(data)
    {
        this.speed = data.speed; 
        this.brand = data.brand; 
        this.imagePath = data.image;
         
        this.build();
    }

    build(){
        const img = document.createElement("img");
        img.src = this.imagePath;

        document.body.appendChild(img)
    }
}