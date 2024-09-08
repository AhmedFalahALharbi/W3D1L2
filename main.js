// Q1
let eatsAnimals = 'herbivore';
let eatsPlants = "carnivore";
let omnivore = "omnivore";

 
    (eatsAnimals) ? "herbivore" : false ;
    (eatsPlants) ? "carnivore" : false ;
     (eatsPlants && eatsAnimals) ? "omnivore" : "undefined";
    
     console.log( eatsAnimals);
     console.log( eatsPlants);
     
    //  Q2
    let musicians = 4;
    if (musicians <= 0) {
        console.log("not a group");   
      }  else if (musicians == 1) {
        console.log("solo");
      } else if (musicians == 2) {
        console.log("duet");
      }  else if (musicians == 3) {
        console.log("trio");
      }  else if (musicians >= 3) {
        console.log("large group");
      } 

    //   Q3
   
// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;


if (room == "ballroom") {
    weapon = "poison";
    suspect == "Mr. Kalehoff"
    solved = true;
} else if (room == "gallery") {
    weapon = "trophy";
    suspect == "Ms. Van Cleve"
    solved = true;
} else if (room == "billiards room") {
    weapon = "pool stick";
    suspect == "Mrs. Sparr"
    solved = true;
} else if (room == "dining room") {
    weapon = "knife";
    suspect == "Mr. Parkes"
    solved = true;
}
if (solved) {
    console.log(`the criminal is${suspect} the weapon is ${weapon} `);
}



      
// Q4
var balance = -325;
var checkBalance = true;
var isActive = true;
if (checkBalance === true){
    if (isActive === true) {
        console.log(balance);
        
    } else {
        console.log("Your account is not active");
        
    }   
} else {
    console.log("You didnt Check Balance");
    
}

// Q5
let flavor = "vanilla"
let vessel = "cone"
let toppings = "sprinkles"
if ((flavor == "vanilla" || "chocolate") && (vessel == "cone" || "bowl" ) &&( toppings ==  "sprinkles" || "peanuts")) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}`);
    
} else {
    console.log("Try again");
    
}
