const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = myArray.map( (num) => num+10 )
// const result = myArray.map( (num) => (num = num + 10))
// const result = myArray.map( (num) => (num+ 10))

//===============
// const result = myArray.map( (num)  => { num = num + 10
//      return num 
// })
//=============================
const result = myArray.map( (num) => {return num + 10})

// console.log(result)

//-------------------------------------------------------------
//===============================================
//Examples: (Using combination of Map and Filter)

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myResult = myArr
// .map( (num) => num * 10)
// .map( (num) => (num + 1))
// .filter( (num) => {return num >= 40})

// .map( (num) => {return num * 10})
// .map( (num) => {return num + 1})
// .filter( (num) => {return num >= 40})

.map( (num) => {return num * 10})
.map( (num) => num + 1)
.filter( (num) => (num >= 40))
console.log(myResult);