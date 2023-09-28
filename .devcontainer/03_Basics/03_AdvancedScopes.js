/*
DOM: Document Object Module.
Using DOM we manipulate the HTML web application by using JavaScript
When we create nested function those get added into a stack 
Child class can access the property of parent class

 */
/* Story: When we are having an ice-cream. Younger one can ask for an ice-cream
from older one. But older one cant

Same thing applies here: Where, two() can access the property of one()
*/
// function One(params) {

//     const userName = "Sanchit"

//     function two() {
//         const myWebsite = "Youtube"
//         console.log(userName);  
//     }
//     // console.log(myWebsite);
//     two()

//    }
// One()
//Here one() and two() both of them are getting print.
//And username is getting accessed inside two()/  or via two() in Website.

//example: If else statement

if (true) {
    const myUserName = "sanchitdesh"
    if (myUserName === "sanchitdesh") {
        const myNewWebsite = "Youtube"
        //console.log(myUserName + myNewWebsite);
        
        //console.log("My Username is:",myUserName + " and my new website name is",myNewWebsite); //Will Print
        //console.log(`My username is ${myUserName} and my website name is ${myNewWebsite}`); //This also will print
    }
    // console.log(myNewWebsite);  //Not defined (Because, out of the body data can't be access. Data only accessible inside the body/Scopes)
}
//console.log(myUserName); //Not defined (Because, out of the body data can't be access. Data only accessible inside the body/Scopes)

//____________________________________________________________________________
//**********************************************Interesting:*****************************************
/*
Note: Difference between function and object with the help of assigning the value.
*/
 //function declaration
 //console.log(myAddNew(5)) //Accessing value is possible in function before initialization.
 function myAddNew(sum) {
    return sum + 1
 }
 console.log(myAddNew(5));     //Statement Runs (Access the value)

 //Object declaration
 //(Initialization - Condition - Inc/Dec)

//  console.log(mySum(5));  //Here, we are trying to access the value before Initialization
 const mySum = function(sum){
    return sum + 2
 }
 console.log(mySum(5));        //Statement Runs (Access the value)