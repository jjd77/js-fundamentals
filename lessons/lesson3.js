//objects
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    vehicles: ['bike', 'scooter', 'paraglider']
}

console.log(customer)
console.log(customer.lastName)
console.log(customer['firstName']) //bracket notation

customer.firstName = 'Mike' //dot notation
console.log(customer.firstName)
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
cars = ["Renault", 'Toyota', "Hyundai"]
cars[1] = "BMW"
console.log(cars[1])

console.log(customer.vehicles[2])