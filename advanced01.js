/*Synchromous and asynchronus Nature 
Synchronous : Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
Asynchronous : Asynchronous means the code runs in a non-blocking manner. Each instruction does not wait*/

console.log("Hello");
console.log("Hello Saptarshi");

setTimeout(() => { 
    console.log("Hello Anuska");
}, 4000);

console.log("Hello Anurshi");

setTimeout(() => { 
  console.log("Hello Everyone , we are a Family ");
},5000);

console.log("Both of us are Software Developers ");

setTimeout( () => {
  console.log("Hello Everyone , Welcome to the PAUL-BISWAS Family ");
}, 6000);

console.log("Have a Nice Day") ;

/* Here Hello , Hello Anurshi and other such console.log's are given as output and then the setTimeout() are given printed . This occurs due to the asynchronous behaviour of JavaScript that does not delay the output of the other code instructions due to use of setTimeout() functions*/
