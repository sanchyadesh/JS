/*
Map:
    It holds Key Value Pair
    It remember original insertion order of the keys
    We can use any either values or Keys


    It doesn't hold duplicate values
    It only holds unique values
    
    Note: Values(both Objects and Primitive Values)
*/

//Example: (How to set a value in Map?)

const map = new Map()
map.set('IN', "India")
map.set('FR',"France")
map.set('USA',"United States of India")
map.set('CA', "Canada")

// console.log(`Map value is:${map}`); //Throwing an Object error
// console.log(map);

// for (const key of map) {  //(To print clearly. there is shortcut called in JS)
//     console.log(key);
    
// }

for (const [key, value] of map) {

    //Note: Below every print statement will work
    // console.log(`${key} :- ${value}`);
    // console.log(key,':-',value);
    // console.log(`Countries are: ${key, value}`);
    // console.log(`Countries are: ${key,':-',value}`);
    
    console.log(`Countries are as follows: ${key} :- ${value}`);

}