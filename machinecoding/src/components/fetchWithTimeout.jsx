// This is the calling fetch with time and aborting when the 
// time completes.

// We will do this by AbortController api by passing signal while calling api
// and abort while timeCompletes. 

function fetchWithTimeout(url, time ){
    return new Promise((resolve, reject)=>{
        const controller = new AbortController();
        const signal = controller.signal;
        console.log("era")
        let timerId = null;
        
        fetch(url, {signal})
        .then((data)=> data.json())
        .then((res)=> {
            console.log(res);
            clearTimeout(timerId)
        resolve(res)
        }).catch((err)=>{
            reject(err);
        })
        
        timerId = setTimeout(()=>{
            controller.abort();
        },time)
    })
} 

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 1000).then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.error(error);
});