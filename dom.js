//DOM Manipulation in JavaScript //
//DocumentGetELementById , documentGetElementByClassName , documentGetELemnetByQuerySelector //
const var1 = document.getElementById('lists');
console.log(var1);
const var2 = document.getElementsByClassName('container');
console.log(var2);
const var3 = document.getElementsByClassName('lists-name');
console.log(var3);
const var4 = document.getElementsByTagName('ul');
console.log(var4);
const var5 = document.getElementsByTagName('h1');
console.log(var5);
const var6 = document.getElementsByTagName('li');
console.log(var6);
const var7 = document.querySelector('#lists');
console.log(var7);
const var8 = document.querySelector('.heading');
console.log(var8);
const var9 = document.querySelectorAll('.lists-name');
console.log(var9);

var8.style.color ='red';
var8.style.fontSize ='2.5rem';
var8.style.border ='2px solid black';
var8.style.background ='black';
var8.style.fontFamily ='cursive' ;
/*
for( let i = 0 ; i <= var9.length ; i++)
  {
  var9[i].style.color ='aqua';
  var9[i].style.fontSize ='2rem';
  var9[i].style.fontFamily ='Cursive';
  var9[i].style.background ='Black';
  var9[i].style.border ='2px solid black';
  var9[i].style.fontWeight ='900';
}
*/
// creating new elements and modifying the text //
const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText= 'Topic 7 is added';
var8.innerHTML ='Congratulations ...old SAPTARSHI is back !!';

console.log(var8.innerText);
console.log(var8.innerHTML);
console.log(var8.innerContent);

//Remove the elements //
li.remove();

