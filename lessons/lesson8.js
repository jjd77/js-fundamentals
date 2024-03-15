//Functions

helloOne()

//Declarative function - can be called even before the functions code
function helloOne(){
    console.log('Hello one!')
}

//Anonymus Function - cannot be called before the code
var helloTwo = function(){
    console.log("Hello Two!")
}

helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log("Hello Three!")
}
helloThree()



// Funtions with argument 
function broPleaseLeaveTheRoom(name, room){
    console.log(`${name} it's time to leave the ${room}`)
}
broPleaseLeaveTheRoom("Maciek", "bathroom")

// Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
console.log(multiplyByTwo(100))

 
// IMPORTING FUNCTIONS
import { printTheAge } from "../helpers/printhelper.js"
printTheAge(10)

// IMPORT EVERYTHING
import * as prtHlpr from "../helpers/printhelper.js"
prtHlpr.printTheAge(34)