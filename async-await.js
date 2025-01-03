// 4. What is async/await?
// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// async/await is syntactic sugar built on top of promises that makes
//  asynchronous code look and behave more like synchronous code, 
//  which is easier to read and reason about.

syntactic sugar mean that behind the seen promise is doing it old  way only i.e.
then catch only to handle the promise

// async: Marks a function as asynchronous and returns a promise implicitly.
// await: Pauses the execution of the function until the promise is resolved, 
// then returns the resolved value.

// Example:

// async function fetchData() {
//   const result = await myPromise;  // Waits for the promise to resolve
//   console.log(result);  // Logs "Data loaded"
// }
// Key Points:
// async functions automatically return a promise.
// await can only be used inside async functions and pauses the execution until the promise resolves.
