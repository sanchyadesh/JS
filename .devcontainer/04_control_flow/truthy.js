// let userEmail;
// let userEmail = "" //Will give else condition
// let userEmail = [] //Will give if condition value
//Note: Empty string is giving false and empty array is giving true
let userEmail = "s@ai.com"
if(userEmail){
    console.log(`User email is ${userEmail}`);
}
else{
    console.log(`User don't have an email`);
}


/*
Falsy values:
e.g-  False, 0, -0, BigInt (0n), "" (empty string), null, undefined, NaN (Not a Number)
Truthy values:
e,g- 
[] (empty array)
"0" (Zero inside String - truthy value) 
'false'
"false"
" " (.Space inside String - truthy value)
{} ---(Empty object)
function(){} --Truthy
() => {}  --Truthy


*/


//--------------------------------
//To check empty array (Is it really empty or not)
let myArr = []
if(myArr.length === 0){
    console.log("Array is empty");
}

//To check is object empty or not.
let myObjectEmpty = {}
if(Object.keys(myObjectEmpty).length === 0){
    console.log(`Object is Empty`);
}

//--------------------------------------------------------------------
//Basic
/*
Basic:

In console
false == 0 
Result: true

false == ''
Result: true

0 == ''
Result: true
*/

//--------------------------------------------------------------------

/*
Nullish coalescing operator (??):
Needed to be analyze on the basis of null or undfined keyword

Notes: This operator task is, when there is null or undefined value at that time, whatever the value comes first will get printed
Because it doesn't want, the flow to be disturbed.

?? --> This Operator is specially designed for null & unde8fined operator
*/

// let val1 = 5 ?? 10
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15 

console.log(val1);

//------------------------------------------------------------
//Ternary Operator: (Which is based on Ternary Operator)
/*
condition ? true : false 
*/

//Example:
const appleJuice = 70
appleJuice >= 100 ? console.log("Apple Juice price is absolute correct...") : console.log("Apple Juice price is incorrect...");