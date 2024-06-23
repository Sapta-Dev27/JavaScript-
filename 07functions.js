//functions in javascript//
function greet(){
  console.log('Learning JS Basics');
}
greet();
//parameters and arguments in javascript//
function userName( firstName , secondName){ // firstName and secondName are the  parameters//
  console.log( "Welcome " + firstName + " " + secondName);
}
userName( "Saptarshi ", "Paul"); //Saptarshi and Paul are the respective arguments in parameters //
// Default parameters in JS //
function add(x,y=0){
    console.log(x+y);
}
add( 10);  // here the second parameter is not passed so y=0 will be taken as the default paramenter //
//return in JS//
function add( x,y){
  return x+y;
}
let result = add(10,20);  
console.log(result);
//objects and functions and this keyword //
const user = {
  firstName : 'Saptarshi',
  lastName : 'Paul',
  age : 20,
  college : 'Techno Main Salt Lake ',
  fullName :function (){
   return this.firstName + ' ' + this.lastName ;
  }
  ,
  qualification : function(){
    return user.fullName +  'is from ' + this.college + 'and this age is ' + this.age;
  }
}
console.log(user.fullName);


