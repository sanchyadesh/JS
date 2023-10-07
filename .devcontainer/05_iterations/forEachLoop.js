const coding = ["JavaScript", "ReactJS", "NodeJS", "AngularJS"]

// //By using arrow function
// coding.forEach( (item) => {
// console.log(item);
// })
//---------------------------------
//By using Basic function
//Note: In Callback function, typename doesn't exist.
// coding.forEach(function (myValues){
// console.log(myValues)
// }) 
//------------------------
//By using function
// function myValuesPrint(myItems){
// console.log(myItems);
// }
// coding.forEach(myValuesPrint)

//--------------------------------
//By using advanced Arrow function

// coding.forEach( (item, index, arr) => {
// console.log(item, index, arr)
// })


//------------------------------------------------------

//Example: Second

const myCoding = [

{
myLanguage : "JavaScript",
extensionName: ".js"
},

{
    myLanguage : "Java",
    extensionName: ".java"
},

{
    myLanguage : "Python",
    extensionName: ".py"
}

]

myCoding.forEach( (item) => {
//  console.log(item);
// console.log(item.myLanguage);
// console.log(item.extensionName);
})
//-------------------------------------------------------------

//ForEach loop- doesn't return anything
//If it returns anything, that will be an undefined
//Example:

const newCoding = ["JavaScript", "ReactJS", "NodeJS", "AngularJS"]
newCoding.forEach( (item) => {
// console.log(item); //returns value
})


//-----------------------------------------
//Example: On collecting forEach loop inside a variable
const newCodingOne = ["JavaScript", "ReactJS", "NodeJS", "AngularJS"]
const rValues = newCoding.forEach( (item) => {
   // console.log(item);
    return item
})
// console.log(rValues); 

//Note: ForEach loop do not return any values. 

//==========================================================================

//Example using different method to return any values.

//Note: This example is returning the values which are greater than 4

const myCodingLanguages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const result = myCodingLanguages.filter( (num) => num > 4 ) 
// console.log(result) //greater than 4

const resultOne = myCodingLanguages.filter( (num) => (num > 4))
// console.log(resultOne)

//const resultTwo  ---> it is called defining resultTwo
//Applying return is mandatory for curley braces. {}
//Applying return is mandatory when we declare a scope.  {} ---> is called as Scope.
const resultTwo = myCodingLanguages.filter( (num) => { return num > 4})
// console.log(resultTwo)
//====================================================
//Obtaining Return values using forEach Loop by declaring array as empty with push method.
const myResult = [] 
myCodingLanguages.forEach( (num)=> {
if(num > 4){
        myResult.push(num)
    }
})
// console.log(myResult);

//=======================================================================

// [
//     5,  6,  7,  8,  9,
//     10, 11, 12, 13, 14,
//     15
//   ]


//======================================================================================

/*
 Filter method:
 {{{}}}  //not allowed
*/

const myBooks = [
    
     {name:"Book 1", genre:"fiction", publish:"1998", edition:"2023"},
     {name:"Book 2", genre:"fiction", publish:"1999", edition:"2020"},
     {name:"Book 3", genre:"Science", publish:"1996", edition:"2018"},
     {name:"Book 4", genre:"History", publish:"2000", edition:"2016"},
     {name:"Book 5", genre:"Science fiction", publish:"2001", edition:"2014"},
     {name:"Book 6", genre:"Geography", publish:"2011", edition:"2010"}

]

let userBooks = myBooks.filter( (myResultMain) => (myResultMain.genre === "Geography"))
//console.log(userBooks);

//SyntaxError: Identifier 'userBooks' has already been declared
// const userBooks = myBooks.filter( (bk) => {bk.publish > 2000})
//Note: In this case, we should override the typename
userBooks = myBooks.filter( (bk) => {return bk.publish > 2000})
//console.log(userBooks);


userBooks = myBooks.filter( (bk) => bk.edition > 2010)
//console.log(userBooks);

userBooks = myBooks.filter( (bk) => {
    return bk.publish > 2000 && bk.genre === "History"
}
)
//console.log(userBooks);  //Will print the unique values


userBooks = myBooks.filter( (bk) => {
    return bk.publish <= 1990 || bk.publish >= "2000"
}
)
//console.log(userBooks);  //Will print the unique values


userBooks = myBooks.filter( (bk) => {
    return bk.publish >= 1990
}
)
console.log(userBooks);  //Will print the unique values