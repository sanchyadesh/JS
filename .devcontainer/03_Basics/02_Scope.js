/*
Scopes: (Advanced topic)
1. It's story start with Let, coinst and Var
2. In a code where curley braces starts and end that is called as scopes.
{} -->  Scopes
When, {} --> Functions, statement is called Scopes of that program/function/statement
3. Statements:
a. if(condition){

      }

Note: var = Not secured. So, it is not recommended to be used.
e.g- if(true){
    var a = 10
}
console.log(a)
Here: 'a' should not come out of scope. As it is locked within scopes, but with some conditions.
4. When we write statements out of scope that is called as global scope
5. When we write statements inside a scope is called block Scope
6. Global Scope is different in browser & in code environment
*/

// if(true){
//     const b = 11
//     var a = 10                
// }
// console.log(a)
// console.log(b);

//___________________________________________________________-

//
// let b = 200 //200 value is declared out of scope which is totally independent
// if(true){
// let b = 20  //this value is not allowed to print
// }
// console.log(b); //Will print the value

//________________________________________________________________

// let b = 200 //200 value is declared out of scope which is totally independent
// if(true){
// let b = 20
// console.log("Inner loop contains the value as:",b)  //this statement will print the value from inside the scope. Because print statement is declatred inside a scope
// }
// console.log(b); 


//________________________________________________________________________

//For Loop: (Syntax)
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }