//Concatenation and Interpolation
var price = 30
var productName = "Stool"
var messageToPrint = "The price of the " + productName + " is " + price + "PLN" //concatenation
var messageToPrint = `The price for the ${productName} would be ${price} PLN` //interpolation
console.log(messageToPrint)