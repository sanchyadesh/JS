/*
Keywords
 1. This- This keyword refers to the current object of the class

 ArrowFunctions:


 */

//  //Object declaration

// const myUserData = {

//     username: "sanchit",
//     email: "sanchit@google.com",
//     company:"google",
//     designation:"Associate Software Engineer",
//     IsLoggedIn: true,


//     WelcomeResponse: function(){
//            console.log(`${this.username}, Welcome to the website...!`);
//     }

// }
// myUserData.WelcomeResponse() //sanchit, Welcome to the website...!
// myUserData.username = "deshmukh" //Value is replaced (sanchit is replaced by deshmukh)
// myUserData.WelcomeResponse() //deshmukh, Welcome to the website...!



//2. Below code will reflect what changes we have done on to the console.
//Object declaration

const myUserData = {

    username: "sanchit",
    email: "sanchit@google.com",
    company:"google",
    designation:"Associate Software Engineer",
    IsLoggedIn: true,


    WelcomeResponse: function(){
           console.log(`${this.username}, Welcome to the website...!`);
           console.log(this);
    }

}
myUserData.WelcomeResponse() //sanchit, Welcome to the website...!
myUserData.username = "deshmukh" //Value is replaced (sanchit is replaced by deshmukh)
myUserData.WelcomeResponse() //deshmukh, Welcome to the website...!
console.log(this) //(Outside of node environment) where it points towards empty global scope
//Node environment: this keyword will point to the empty object"{}" which is empty. (Global scope).
//Browser environment: this keyword will point to the Window Object "{}"--> Data is available in console of browser.(Chrome/Edge/firefox)

//*********************************************************************************************

/*
When, 
console.log(this); //Inside Node Environment (In an Object data will be printed) 
console.log(this); //Outside Node Environment (Object will be an empty)
*/

//Inside Node Environment

function me() {
console.log(this);    
}
me()


//-----------------------------------------------------------------------------

// This keyword (Using Function)

function myData() {
myUserName: "Sanchit"
console.log(this.myUserName) // Print: Undefined (Because function doesn't support This Keyword)
//This Keyword --> Function = Doesn't support
//This Keyword --> Object = Support
    
}
myData()

//----------------------------------------------------------------------------------------

/*
Declaration of functions- By using below:
ArrowFunction:
Synatx: 
const typeName = () => {

}

*/
//with simple function
const demo = function() {
useMyName: "Sanchit"     
//console.log(this.useMyName) //undefined   
}
demo()

//using array function
const myDemo = () => {
myName: "Sanchit"
// console.log(this.myName); //undefined
}
myDemo()

//__________________________________

//Examples:
//Explicit return
const AddAFDemo = (num1, num2) => {
    return num1 + num2
}
// console.log(AddAFDemo(7,8));

//o/p: 15

//__________________________________________________
//Example: (Same thing but using implicit return)

/*Notes: Implicit return:
a. Don't required "{}". Because it accepts that we need to run this smooth task in a one go
b. Don't required "return".

2. if "{}" then "return" keyword is required
3. if "()" then "return" keyword is not required

*/

//Notes: Implicit return:
const mydemoData = (num1, num2) => num1 + num2

// console.log(mydemoData(5,6));

// o/p: 11

//_____________________________________________________________

//Implicit return
const newDemo = (num1, num2) => (num1 + num2)
console.log(newDemo(4,5));

//o/p: 9

//______________________________________________________________
//Object with Implicit return
const one = (num1, num2) => ({uName: "Sanchit"})
console.log(one(2,3));

//__________________________________________________________________

//Arrow function using Array

const myArray = [3, 4, 5, 6, 7]
// myArray.forEach(function(){   //1st way

// })

// myArray.forEach(() => {   //2nd way 

// })

// myArray.forEach(() => (  //3rd Way

// ))

//-----------------------------------------------------
