let userName = "Saptarshi Paul";
let userAge = 25;
console.log(`Hello my name is ${userName} and my age is ${userAge}`);
let userCollege = 'Techno Main Salt Lake';
let userDept = 'CSDS';
console.log( `${userName} is from ${userCollege} , department is {+${userDept}}`);
const newName = new String('Saptarshi');
console.log(newName);
console.log(newName.length);
console.log(newName.charAt(2));//charAt returns the character at the particular index of the string //
console.log(newName.charCodeAt(2));//charCodeAt returns the code of character at the particular index of the string //
console.log(newName.at(2));//charAt returns the character at the particular index of the string//

//strings methods like slice , substring , substr //
//slice is used to extract a part of a string //
console.log(newName.slice(2,4));
const newName1 = new String('Saptarshi');
console.log(newName1.slice(-6,-2));//negative number denotes that it starts  extracting from  the end of the string //
//substring is also used to extract a particular part of a string but it differs from slice in the respect that if we use negative numbers then substring ignores the negative number and starts extracting the string from 0 //
console.log(newName.substring(2,4));
console.log(newName.substring(-2,4));
//strings can be converted to Uppercase and LowerCase //
console.log(newName.toUpperCase());//converts to upperCase//
console.log(newName.toLowerCase());// converts to LowerCase //
//strings can be concaticated//
let text = 'Saptarshi'.concat(' ' + 'Paul');
console.log(text);
console.log(newName.concat(' ' + 'Paul'));
console.log( 'Saptarshi' + ' ' + 'Paul');
//trim , repeat and replace //
let name = " Saptarshi Paul ";
console.log(name.trim());//removes all the blank spaces //
console.log(name.trimEnd());//removes all the blank spaces from the last //
console.log(name.trimStart());//removes all the blank spaces from the start //
console.log(name.repeat(4));//repeats all strings in (n) times //
console.log(name.replace('Saptarshi','Anuska'));//replaces the string with the new string //