/*variables in JavaScript includes var , let , const */
const accountId = 12345 ; //the value of this variable cannot be changed cause this is a const variable //
let accountName = "Saptarshi Paul"; 
let accountEmail = "saptadev27@gmail.com";
var accountCity = "Kolkata";
accountCity = "Bengaluru"; //here the previous city gets updated to the new city name //
let accountState; // in javascript since accountState value is not defined so , the output will be " undefined "//
console.log(accountId);
console.table([accountEmail, accountName, accountCity , accountState]);