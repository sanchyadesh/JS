/*
Reducer: This method executes the user-Supplied "Reducer"

         In reduce method, single operation cannot be performed.It will perform Accumulator or current value or Items  
*/
//Function using reduce method

// const myarray = [1, 2, 3]
// const result = myarray.reduce(function(acc, cValue){
//     console.log(`Accumulator value is ${acc} & Current Value is ${cValue}`);
//     return acc + cValue},0)
// // console.log(result);


//====================================================================================
//Example: Using Arrow Function
const tValue = [1, 2, 3]
const resultMy = tValue.reduce((accu, cvalue) => (accu + cvalue),0)
// console.log(resultMy);

//=============================================================================================
const shoppingCart = [
    {
      ItemName : "Wheat",
      ItemPrice : 999.00,
      ItemQuantity : 5,
      SKU : 2347
    },

    {
        ItemName : "Jowar",
        ItemPrice : 1299.00,
        ItemQuantity : 3,
        SKU : 2346
      },

      {
        ItemName : "Rice",
        ItemPrice : 799.00,
        ItemQuantity : 2,
        SKU : 2345
      },


      {
        ItemName : "Chana",
        ItemPrice : 599.00,
        ItemQuantity : 3,
        SKU : 2344
      },

      {
        ItemName : "Moong",
        ItemPrice : 1999.00,
        ItemQuantity : 5,
        SKU : 2343
      }
]

// let result = shoppingCart.reduce((Accumulator, item) => (Accumulator +" "+item.ItemName),0 )
let result = shoppingCart.reduce((Accumulator, Items) => (Accumulator +" "+Items.ItemName),0 )
console.log(result);
//==========================================================================================