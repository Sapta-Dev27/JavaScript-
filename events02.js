 const container = document.querySelector('.container');
 const container_child = document.querySelector('.child-container ');
 const child = document.querySelector('.child');

 child.addEventListener( 'mouseover' ,  (e)  => { 
  e.stopImmediatePropagation();
   alert( " Hello I am Saptarshi Paul");
 })

 container_child.addEventListener('mouseover', display);
 function display () { 
  
  alert ( " Hello , I am Anuska Biswas , Girlfriend and would be wife of Saptarshi Paul") ;
 }

 container.addEventListener('mouseover' , display2);
 function display2() { 
  alert( " Hello , I am Anurshi , product of Saptarshi Paul and Anuska Biswas ");

 }
 function randomColor() { 
  let val1 = Math.ceil(  0 + Math.random()*255);
  let val2 = Math.ceil( 0 + Math.random()*255);
  let val3 = Math.ceil( 0 + Math.random()*255);

  return `rgb(${val1} , ${val2} , ${val3})` ;
 }

 let a = setInterval( () => { 
  document.querySelector('.box-1').style.background = randomColor();
 } , 1000);
 console.log(a);

 let b = setInterval( () => { 
  document.querySelector('.box-2').style.background = randomColor();
 } , 1000);
 console.log(b);

 let  c = setInterval( () => { 
  document.querySelector('.box-3').style.background = randomColor();
 } , 1000);
 console.log(c);

 let d = setInterval( () => { 
  document.querySelector('.box-4').style.background = randomColor();
 } , 1000);
 console.log(d); 

 let e = setInterval( () => { 
  document.querySelector('.box-5').style.background = randomColor();
 } , 1000);
 console.log(e);

 let f = setInterval( () => {
  document.querySelector('.container').style.background = randomColor() ;
 } , 1000) ;
 console.log(f);

 let g = setInterval( () => { 
  document.querySelector('.child-container').style.background = randomColor();
 } , 1000) ;
 console.log(g) ;

 let h = setInterval( () => { 
  document.querySelector('.child').style.background = randomColor();
 } , 1000) ;
 console.log(h) ;

 