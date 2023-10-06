
/*
Object: It is a blueprint of class

Note:  myObject is not iterable
       (for in) loop will work
       (for of) loop doesn't work
*/
const myObject = {
   js:"JavaScript",
   py:"Python",
   swift:"Swift by Apple"
}

for (const key in myObject) {

// console.log(key); //Key will be printed
// console.log(myObject[key]); //Value will be printed

//Note: Will work
// console.log(`${key} stands for ${myObject[key]}`);
        
}

//---------------------------------------------------

/*
Array using forIN loop

Array: Indexing starts with zero / Key starts with zero by default
Object: We can apply any key from start to end
*/
//Example:

const newArray = ["JavaScript", "React JS", "Node JS", "Angular JS"]

for (const key in newArray) {
    // console.log(key)
    // console.log(newArray[key]); //values will print
    // console.log(`${key} is ${newArray[key]}`);

} 
//Note: 'ForIn' loop- Key will print index position of values