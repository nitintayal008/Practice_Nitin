Performance Optimization:

1. How do you optimize the performance of a React application?
2. How would you prevent unnecessary re-renders in a React component?

Event Loop and Execution Context:

3. Can you explain the JavaScript event loop and how it handles asynchronous tasks like 
setTimeout, promises, or async/await?
4. What are microtasks and macrotasks, and how are they processed in the event loop?

Memory Management:

5.Can you explain memory leaks in JavaScript and how to avoid them in a React application?
6. How does garbage collection work in JavaScript?

7. Have you ever refactored an application to use custom hooks for code reuse?
 If yes, can you share an example?

8. What are the differences between Promises, async/await, and callback functions?
9 Why is there a need for using keys in Lists?
10 What is a higher order component?
11. What is JSX?

12 Difference between action and reducer.
Actions are plain javascript objects.
They must have a type indicating the type of action being performed.
In essence, actions are payloads of information that send data from your
 application to your store.
A reducer is simply a pure function that takes the previous
 state and an action, and returns the next state.

13 Can you explain how to create a shallow copy of an object in JavaScript?
14. Can you explain a real-world use case where using a
 shallow copy could cause issues in an application?

15 What does bind() do in JavaScript, and when would you use it?

Expected Answer: bind() returns a new function with a specific this value and optionally
 pre-sets arguments. It is useful when you want to delay execution or pass the function 
 as a callback with a fixed this.

16 How can you remove duplicate values from an array in JavaScript?

Expected Answer: You can use a Set or array methods like filter() and indexOf()

17 What is the difference between map(), forEach(), filter(),
 and reduce() methods in JavaScript arrays?

18 Explain the difference between slice() and splice() methods.
Expected Answer:
slice(): Returns a shallow copy of part of an array without modifying the original array.
splice(): Modifies the original array by adding/removing elements at specified indices.

19 What are template literals, and how are they different from normal strings?

Expected Answer: Template literals use backticks (`) and allow embedding expressions
     with ${expression}. They support multi-line strings and variable interpolation.