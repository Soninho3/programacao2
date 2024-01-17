 const addnumbers = (a, b) => {
     
    return a + b; 

 }  


 console.log(addnumbers(2, 3));

 //let gau = 10; 

// switch(gau){

//    case 10:
  //      console.log("it is ten");
    //    break;
    //case 20 : 
     //   console.log("it is twenty");
      //  break;
   // case 30: 
     //    console.log("it is thirty");
       //  break;
        // default:
          //  console.log("hhah default value has entered the chat");
 //}


for(let b = 0; b < 10; b++){

    for(let g = 0; g < b; g++)
    {
        console.log(b);
    }
}

let arr = ["hello","this","nest","growling"];
for(let cass = arr.length-1; cass >= 0; cass--)
{
    console.log(arr[cass]);

}

let arr2 = [10, 20, 30, 40, 50];
arr2[0] = arr2[0] * 3.14;
arr2[1] = arr2[1] * 3.14;
arr2[2] = arr2[2] * 3.14;
arr2[3] = arr2[3] * 3.14;

console.log(arr2);

const addcomment = (a) =>{

    console.log(a+" is a number");

}

arr2.forEach(element => {

    addcomment(element);
    
});