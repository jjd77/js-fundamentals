
export function printTheAge(age){
    console.log("The age is actually " + age)
}

class CustomerDetails {

    printFirstName(fName){
        console.log(fName)
    }
    /**
     * This method just simply prints the last name
     * @param {string} lName 
     */
    printLastName(lName){
        console.log(lName)
    }

}

export const  customerDetails = new CustomerDetails