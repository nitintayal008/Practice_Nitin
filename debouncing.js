// https://www.syncfusion.com/blogs/post/javascript-debounce-vs-throttle
// Debouncing - it is a technique where you delay the esecution of a function until after a 
// certain amount of time has passed.
// This is useful if you have frequentl used functionn-
// scroll, resize, typing 

// Suppose you have a search input field that triggers an API call to fetch search results
//  as the user types. Without debouncing, the API call would be made on every keystroke, 
//  causing excessive requests. Debouncing ensures that the API call is made only after the
//   user has paused typing.

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debounceSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
  // Make API call with the search query
}, 300);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
  debounceSearch(event.target.value);
});

// In this example, the debounce function ensures that the API call is made 300 milliseconds
//  after the user stops typing. If the user continues typing, the timer is reset,
//   preventing the API call from being triggered too frequently.




//lets make a proomise 

function fetchResult(data){
  return new Promise((resolve, reject)=>{
   setTimeout(()=>{
    const data = "hello i am there"
    resolve(data);
   },1000)
  })
}


fetchResult().then((data)=>console.log(data)).catch()

