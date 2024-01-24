// window.onload = () => {
//     const button = document.querySelector("button");
//     console.log(button);

//     // button.onclick = () => {
//     //     console.log("button clicked")
        
//     // }

//     button.onmousedown = () => {
//         console.log("down");
//     }
//     button.onmouseup = () => {
//         console.log("mouse up");
//     }
//     // button.onmouseenter = () => {
//     //     console.log("mouse enter ");
//     // }
//     button.onmouseout = () => {
//         console.log("mouse out");

//     }
//     button.onmouseover = () =>{
//         console.log("over");
//     }
//     const body = document.querySelector("body");
//     const beout = document.createElement("div");
//     beout.style.backgroundColor = "orange";
//     body.appendChild(beout);
// }

// window.onload = () => {
//     const large = document.querySelector(".large");

//     let intervalS = null;

//     large.onclick = () => {
//         if(intervalS === null){
//             intervalS = setInterval(() => 
//             console.log("hello", 10000))
//         }else{
//             console.log("stopped");
//             clearInterval(intervalS);
//             intervalS = null;
//         }
//     }

// }

window.onload = () => {

    const large = document.querySelector(".large");
    const small = document.querySelector(".small");

    // large.onclick = () => {
    //     console.log("hi sir");
    //     large.dispatchEvent(new CustomEvent('div_click'));
    // }

    // large.addEventListener("div_click", () => {
    //     console.log("hellor sir 2");
    // } )
    small.onclick = () => {
        console.log("hello ms");
        small.dispatchEvent(new CustomEvent("div_click"))
    }
    small.addEventListener("div_click", () => {
        console.log("hellor sir 3");
    } )
    

}

class AppTest extends HTMLElement{

    constructor(){
        super();

    }

    async laodData = () => {

        const req = await fetch("data.json");
        const res = await req.json();
    }

    this.dispatchEvent(new CustomEvent("test_data_loaded", {}));
}