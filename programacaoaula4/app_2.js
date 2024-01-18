console.log("hello");

let a = 1;
let b = 0; 

const fibbdigits = () => {

    for (let i = 0; i < 10; i++) {
        const temp = a; 
        a = a + b; 
        b = temp; 
        console.log(a);     
        
    }

}

//fibbdigits();

//let user = {

  //  id : 0,
    //name : "carlos",
    //age : "32",
    //gender : "male",
    //dob : "26-07-1992",
    //hobbies: ["reading","skydiving","surfing","programming"]

//}

//for(const key in user){
  //  console.log("the "+key+" is "+user[key]);

//}

// const originalObjects = {
    
//     key1: "valu1ue1",
 //    key2: "valu1ue2",
 //    key3: "valu1ue3"

 //}

 let user = {

      id : 0,
      name : "carlos",
      age : "32",
      gender : "male",
      dob : "26-07-1992",
      hobbies: ["reading","skydiving","surfing","programming"]
  
  }

//class User {

   // name;
  //  age;
    
 //   constructor(){

      

    //}

   // getName(){
   //     return this.name;

 //   }

  //  getAge(){
 //       return this.age;

    //}
    //get name(){
    //    return 


    //}

   // shownumbs(a, n){
   //     console.log(n+" is not "+ a);

 //   }
//}

//const user_1 = new User();


//console.log(user_1.getAge());
//console.log(user_1.getName());
//user_1.shownumbs(3, 4);




import Car from "./Car.js";

import motorcycle from "./Motorcycle.js";

const car = new Car(); 
const motobike = new motorcycle();

