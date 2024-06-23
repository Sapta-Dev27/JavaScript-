/* the data types in JavaScript are of two types : primitive and tertiary data types ;
Primitive date types are : Number , BigInt , string , boolean , undefined , null ;
Tertiary data types are : Arrays , Objects */
//Numbers Data Type //
let num1 =  22;
let num2 =  23;
//Strings Data Types //
let name = "Saptarshi Paul";
let name2 = "SaptaDev27";
// string + number //
//javascript will read the numbers as strings  and vice versa depends upon the code and it moves from left to right//
let value = 16 + 4 + "Saptarshi"; //here javascript will read the string as number //
let value2 = "Saptarshi" + 16 + 4; //here js will read the numbers as string //

//objects in javascript //
let obj = {
  userName : 'Saptarshi Paul ' ,
  userAge : 20 ,
  userEmail : 'saptadev27@gmail.com' ,
  }

  // arrays in Javascript //
  let arr1 = [ 1 ,2 ,3, 'Saptarshi ', 'SaptaDev27' ];
  let arr2= [1 ,2, 3, true , false ];

  // null and undefined data type in JavaScript //
  let nullValue = null ; // remember typeOf null is a object //
  let undefinedValue = undefined ; // remember typeOf undefined is a undefined //

 //boolean //
 console.log(5 == 7);
 console.log( 5 == 5); 
 console.log( 5 == 5.0);
 console.log( 5 == 'SaptaDev27');

 //typeof//
 console.log(typeof null);// typeof of null is an object //
 console.log(typeof undefinedValue);// undefined //
 
//printing all in a table format//
console.table( [num2 , num1]);
console.table( [name2 , name]);
console.table([nullValue,undefinedValue])
