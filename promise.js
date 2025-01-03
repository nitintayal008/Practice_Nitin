// what is promise in js
// a promise in a js is an object that represent eventually completion aur failur of an
// asynchronus operation. it is used for handling asynchronus operation such as making 
// an api calls aur reading files, in a more orghainsed fashion.

// prmise has three StaticRange
// 1. pending - intial state   The promise is still being resolved or rejected.
// 2. Fulfilled - The asynchronous operation has been completed successfully, and the promise is resolved.
//  It returns a value
// 3. rejected 

// promise has two main method

// then -> it is called when promise is fullfilled . it takes two optional callbacks,
// one for sucess and one for faiure,. The success callback receives the resolved value, 
// and the failure callback receives the rejected error

// catch -> this method is called when the promise is rejected , it takes the callback function that 
// recieves the error.


//
Read this article for proper difference of async-awairt na dthen catch is 
https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
https://dev.to/kylejb/a-key-difference-between-then-and-async-await-in-javascript-53e9
//
Example
const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolve success");
    }, 10000);  // 10 seconds
  });
  
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolve success");
    }, 10000);  // 10 seconds
  });
  
  async function handlePromise() {
    console.log("hllo");
  
    const val = await p1;  // Waits for p1 to resolve, but p2 has already started
    console.log("namste 1");
    console.log(val);  // Logs "Promise resolve success" after 10s
  
    const val2 = await p2;  // p2 has already been counting down, no additional wait
    console.log("namaste 2");
    console.log(val2);  // Logs "Promise resolve success" immediately after p1
  }
  
  handlePromise();

  
  Key Points:
  p1 and p2 start simultaneously, not sequentially.
  As soon as the promises are created, both timers (from setTimeout) start counting.
  When the function hits await p1, it pauses execution, waiting for p1 to resolve. By this time, both p1 and p2 have been running in the background.
  After p1 resolves (after 10 seconds), it immediately moves on to await p2. Since p2 has also been running for 10 seconds by this point, it resolves immediately, without an additional 10-second wait.
  Output:
  0 seconds: "hllo" is printed.
  10 seconds: "namste 1" and "Promise resolve success" (from p1) are printed.
  Immediately after (10 seconds): "namaste 2" and "Promise resolve success" (from p2) are printed.

  Visual Timeline of Events:
Time	Action	Result
0 sec	p1 and p2 are created	Both timers start (10 sec)
0 sec	await p1 pauses the function	Waiting for p1 (10 sec)
10 sec	p1 resolves	Function resumes
10 sec	await p2 is called	p2 already resolved, no wait


