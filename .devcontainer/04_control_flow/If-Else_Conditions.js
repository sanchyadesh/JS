/*

*/
const isUserLoggedIn = true
const isDebitCardExist = true
const isLoggedInFromGmail = false
const isLoggedInFromYahoo = true

if(isUserLoggedIn && isDebitCardExist && 2==2){
    console.log("Allow to enter, thank you!");
}

if(isLoggedInFromGmail || isLoggedInFromYahoo){
    console.log("User has successfully logged in... Thanks!");
}
else{
    console.log("Something went wrong... Please try again!");
}