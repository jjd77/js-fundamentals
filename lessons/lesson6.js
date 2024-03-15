// Conditional statements

// if(condition){
//     //execute some code here
// } else{
//     //execute some code here
// }

// If hour is between 6 and 12 -> print "Good Morning"
// IF it's between 12 and 18 _> "Good Afternoon", else "Good Evening"

var hour = 18

if(hour >= 6 && hour < 12){
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

