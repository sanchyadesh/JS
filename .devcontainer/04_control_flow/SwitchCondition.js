/*
#Switch Case Condition:
Syntax:
switch (Key) {
    case value:
        
        break;

    default:
        break;
}
*/
//Using Number

const month = 2
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default Case Occured... Please enter correct value!");
        break;
}

//----------------------------------------------------
//Using String
// const checkMonth = "April"
let checkMonth = "January"
switch (checkMonth) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("Default Case Occured... Please enter correct value!");
        break;
}