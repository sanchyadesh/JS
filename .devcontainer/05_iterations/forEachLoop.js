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