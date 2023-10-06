/*
Loops/Iterations/Interator

Syntax:
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//Basic flow of for loop:

1. Flow starts from zero (0)
2. Test's the condition (0 is less than 10)
3. Go for printing a value on console
4. After printing a value it goes for increment/decrement.
5. After INC/DEC the cycle repeats again.
6. Again takes the 1 and goes for initialization.
7. Initialization ---> Condition ---> Printing ---> Increment/Decrement 
8. Take the value, starts from initalization again.

Note: Always indexing starts from zero (0). But we can take any value at zeroth Position. But indexing will always starts from zero

      In scopes the value will work within the scopes only not outside of the scope.
*/


for (let i = 1; i < 10; i++) {
    // const element = i;
    // console.log(i)
}
//console.log(i) //ReferenceError: i is not defined (Value will work within the scopes only but not in outside)



//Another way to declair a scope for loop
for (let j = 0; j < 10; j++) {  
    const myElement = j
    // console.log(myElement);
    
    
}

//-----------------------------------------------------
//Example: (Try to print any sentence between the number e.g- 7 is birthday of MSDHONI)

for (let k = 0; k < 10; k++) {
    const element = k;
    if(k === 7){
    //   console.log(`7 = 7th July 1981, Is the birth date of our former Indian Cricket Team Captain Lt. Colonel Mahendrasingh Pansingh Dhoni`)
    }
    // console.log(element)
    
}

//-------------------------------------------

//Below example is not a good practice:
 for (let i = 1; i <= 10; i++) {   
    // console.log(`outer loop: ${i}`);
    //console.log(`Length is: ${i.length}`);
    for (let j = 1; j <= 10; j++) { 
        // console.log(`inner loop ${j} and outer loop ${i}`);

        //#It will multiply the values every 10 times
    // console.log(i + '*' + j  + '=' + i * j);  
    }
 }
/*
 i=0   
 j=0-------j=10

 j=1
 j=0---------j10

 j=3
 j=0---------j10


 j=4
 j=0----------j10

 Process continues
 */


 //After basic some advanced

 //Example trying to print an array:
let myArray = ["Sanchit", "SanchitOne", "SanchitTwo"]

// console.log(`Length of a myArray is: ${myArray.length}`);

// console.log(`After finding length. Let's try to print an Array`);


//  for (let i = 0; i <= myArray.length; i++) {  //It will print one extra value which is undefined
    for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
 }



 //--------------------------------------------------

 //Example for keyword:
 /*
 e.g- If we have to print 10 books.
      But those 10 books should be seperated.

      If we run an array, then after every one book it have to stop and then continue to next book.
      Otherwise, all 10 books will get printed in one book.

      So, to avoid this issue. We have some keywords:
      1. break
      2. continue
 */
//----------------------------------------------------------------------

//Example on "break" Ketyword.

for (let i = 0; i <= 20; i++) {
    if(i === 7){
        console.log(`${i}-> 7 Detected. Proceeding to terminate the path...!`);
        break;
       
    }
   console.log(i); //print statement 0 to 20
}

//_____________________________________________________________________

//Example: (Using "Continue keyword")
for (let j = 0; j <= 20; j++) {
    if(j === 7){
        console.log(`${j}-> 7 Detected. But anyway proceeding to continue the printing path...!`);
        continue;  //Will continue to print. Even after 7 is detected.
       
    }
   console.log(j); //print statement 0 to 20
}

//--------------------------------------------------------------------------

//Example (Using While loop)





/*
Syntax:
While loop:
While(condition){

}

--------------------------------
Syntax:
Do While loop:
do{

}while(condition);
---------------------------------------------------------------------------
Difference between while and do while loop is that:
While loop doesn't print if the condition is false.
Do While loop print atleast once, when the condition is false.

*/