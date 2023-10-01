//Intermediately Invoked Function Expressions (IIFE)

/*
If we written a Function and now we wanna execute quickly
ex: In a scope, if sometimes there are already variables declared and in function when we are 
trying to declare something in a function. At that time we don't want to global scope to pollute the main function.
and we want it to immediately get executed at same time.
At some point main function get pollute due to global scope.

So, to remove the pollution we have use iife function.
Represented by, (function is covered with Parenthesis)(execution)
i.e: ()()
*/

// function kohler(){
//     console.log(`DB Connected`);
// }
// kohler()



//--------------------------------------


/*
2nd Way:
#Syntax

(function(){
console.log();
}) 
*/

//Note: simple function with typeName is called "Named IIFE"
// (function kIndia(){   
//     // console.log(`DB Conncted successfully...!`);
// })(); 
// })()

//Note: ()() Where, () Function definition to be written
//                   () Execution
//-----------------------------------------------------

/*
By using Arrow function (To avaoid Pollution)
Note: Here it will throw an error because it doesn't know where and how to stop. To stop it just apply ";"
*/
// (() => {
//     // console.log(`DB connection successful`)
// })() 
//o/p: DB connected Successfull 

//---------------------------------------------------------

// (function myChai(){
// console.log("DB My Connect");  //first runs
// })();

    
// (function code(){
//     console.log("Code connected")//second time it doesn't then we need to apply ";" to first function
//                                 //then it will run
// })()

//______________________________________________________
//Note: () is used to stop the incoming pollution

// (function myChai(){
//     console.log("DB My Connect");  //first runs
//     })();
    
        
//     (() => {
//         console.log("Code connected")//second time it doesn't 
                                   
//     })() //Error:(intermediate value)(...) is not a function  (Intermediate Invoked)
//     //Soln: To resolve this just apply ";". Then it will get resolved and will run
//_____________________________________________________________________________________

/*
 ()() - This code also expects variable to printed.
*/
//Example:
((name)=>{
console.log(`code connected ${name}`)
})('Sanchit')
//("Sanchit")//Both will work

//_______________________________________________________________________

