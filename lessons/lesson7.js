// Loops

// for(statement1; statement3; statement3){
// }

// for i loop
for(let i=0; i<5; i++){
    console.log("hello world" + i)
}


// for of loop
cars = ["Renault", "Mercedes", "Honda"]
for(let car of cars){
    console.log(car + " has just broke")
    if(car == "Mercedes"){
        break
    }
}


// ES6 syntax for each loop
cars.forEach( car => {
    if(car !== "Renault"){
        console.log(car + " is not the best in the world")
    } else if (car == "Renault") {
        console.log(car + " is actually pretty dope!")
    }
});