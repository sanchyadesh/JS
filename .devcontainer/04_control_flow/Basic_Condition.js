/*
#Condition based programming: (For Basic Understanding)
Examples:
         a. Every code from one class not to be executed.
         b. The code should execute based on condition
            e.g- Login/Logout -->Seperately
         c. This is called as Control flow/Logic flow


         -------------------------------------------------------------------
Important:
Conditions:
          {} --> Called as Scope
       1. Control flow:
            
              a. If Statement
                Syntax:
                 if(Condition){
                 Statement
                   }
                   else{

                   }
              If condition is true then block scope will execute
              If condition is false then block scope will not execute
*/
//-------------------------------------------------------------------------------------------------------------------------
/*
#Operators:
 1. Comparison Operator
     e.g- <, >, =, >=, <=, !=, ==, === etc.
     Where === is a strict check. which checks everything like datatype, value etc.

*/
//example on operator:
//-----------------------------------------
//(Using ==)
// if(2 == "2" ){
// console.log("Executed");
// }


//---------------------------------------------
//(Using === with else condition)
if(2 === "2"){
console.log("Executed");
}
else{
console.log("Will not executed... Data doesn't matches");
}


//------------------------------------------
//(Using == with else condition)
if(2 == "2"){
    console.log("Executed");
    }
    else{
    console.log("Will not executed... Data doesn't matches");
    }

//------------------------------------------------------------------
//(Using !=)
if(2 != 1){
  console.log("Correct data...");
}

//--------------------------------------------
//New Example

if (2 != 2) {
console.log("True Condition");
}
else{
  console.log("False Condition");
}

//--------------------------------------------
if (2 == 2) {
  console.log("True Condition");
  }
  else{
    console.log("False Condition");
  }


//---------------------------------------------------
//(Using (>=)
const isLoggedIn = true

if(isLoggedIn == true){

  console.log("He has successfully logged in...");

}

//------------------------------------------------------

const temprature = 40

if(temprature <= 50){   //Condition is true
  console.log("Temprature is less than 50");
}


//-----------------------------------------------------------

const tempratureUnit = 40

if(tempratureUnit >= 30){   //Condition is true
  console.log("Temprature unit is greater than 30");
}
else{
  console.log("Temperature unit is lesser than 30");
}

//--------------------------------------------------------------------

let isLoggedInSuccess = true

if(isLoggedInSuccess = false){
  console.log("Successfully logged in...");
}
else{
  console.log("Please try again...");
}

//--------------------------------

let isLoggedInSuccessOne = true

if(isLoggedInSuccessOne = true){
  console.log("Successfully logged in...");
}
else{
  console.log("Please try again...");
}


//-------------------------------------------------------------------

const score = 200

if(score > 100){  //condition is true
  const power = "fly"
  console.log(`User score is:${power} `);

}
//console.log(power) //Outside of scope value will not print. Because the boundary of that value is scope.


//--------------------------------------------------------------------------

//Simple example to test the condition to check a balance
const myAccountBalance = 10000

if(myAccountBalance < 1000){
  console.log("myAccountBalance is less than 1000");
}
  else if(myAccountBalance > 2000){
console.log("myAccountBalance is more than 2000");
}
else if(myAccountBalance < 3000){
console.log("myAccountBalance is less than 3000");
}
else {
  console.log("myAccountBalance is lesser than 50000");
}

//------------------------------------------------------
