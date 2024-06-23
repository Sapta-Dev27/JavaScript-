// events in Javascript such as click event and mouseover event //

const alertEvent = document.querySelector('.box-1');

function alertFunction(){
  alert("Click on this page to know more");
};

alertEvent.addEventListener("click" , alertFunction);

//events in JavaScript //

const textEvent = document.querySelector('.box-1');

function textFunction()
{
  textEvent.innerHTML= 'Welcome to the Events Tutorials in JavaScript';
  textEvent.style.backgroundColor = 'red';
  textEvent.style.fontSize= '1.5em';
  textEvent.style.fontFamily ='Cursive';
  textEvent.style.color = 'white';

};
textEvent.addEventListener("click" , textFunction);

// events in Javascript such as mouseover //

const mouseover_event = document.querySelector('.box-2');
mouseover_event.addEventListener("mouseover" , mouseoverfunction);
function mouseoverfunction(){
  mouseover_event.style.backgroundColor = 'blue';
  mouseover_event.style.color='white';
  mouseover_event.style.fontSize='1.5em';
}

//toggle events in JavaScript //

const toggle_event = document.querySelector('.btn-3');
const toggle_text = document.querySelector('.text');
toggle_event.addEventListener("click" , togglefunction);

function togglefunction(){
   if( toggle_text.classList.contains('text')){
    toggle_text.classList.remove('text');
   }
   else{
    toggle_text.classList.add('text');
   }
}; 

//toggle wrap events in JavaScripts //
const toggle_event_2 =document.querySelector('.btn-4');
const toggle_text_2 = document.querySelector('.text-2');
toggle_event_2.addEventListener("click" , togglefunction2)
function togglefunction2(){
     toggle_event_2.style.backgroundColor='yellow';
     toggle_text_2.style.fontSize='0.8rem';
     toggle_event_2.style.color='green';

      if(toggle_text_2.classList.contains('text-2')){
        toggle_text_2.classList.remove('text-2');
      }
      else{
        toggle_text_2.classList.add('text-2');
      }
};
