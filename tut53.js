console.log("this is tutorial 53");

// Function has local scope
function greet(name, greetText="Greetings from JavaSript to"){
    let name1 = "Name1";
    console.log(greetText + " " + name)
    console.log(name + " is a coder")
}

// function sum(a, b, c){ *******************************
    // let d = a + b + c;********************************
    // return d;*****************************************
// })******************************************
// This line will never execute (Unreachable code)
// console.log("Function is returned"); 


// This returns in "true" or "false"
// function dif(a, b){
//     let dif= a > b;
//     return dif;
// }

// let has Global scope
let name1 = "Harry";
let name2 = "Shubham";
let name3 = "Rishi";
let name4 = "Mittu";
let greetText1 = "GooD MoRnInG";  // greetText = greetText1(hear u can give any name, i just gave greetText1)

greet(name1, greetText1)
greet(name2, greetText1)
greet(name3, greetText1)
greet(name4, greetText1)
// let returnVal = greet(name3);
// console.log(returnVal)

// let returnVal = sum(1,2,3);******************************
// console.log(returnVal)***********************************

// returns in "true" or "false"
// let returnVal = dif(23, 43)
// console.log(returnVal)

// console.log(name1 + " is a coder");
// console.log(name2 + " is a coder");
// console.log(name3 + " is a coder");