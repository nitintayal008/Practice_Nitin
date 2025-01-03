import React, { useEffect } from "react";

const LocalStoragee =()=>{
    useEffect(()=>{
        window.localStorage.setItem("foo","bar"); 
        setTimeout(()=>{
            window.localStorage.clear();
        },1000)
    },[])

    setInterval(()=>{
        console.log(window.localStorage.getItem("foo"));
    },1000)

    return (
        <div>
            hello there i 
        </div>
    )
}


// creating your own localStrorage
const myLocalStorage ={
    data:{},
    setItem: (key, value, time)=>{
        myLocalStorage.data[key]=value;
        setTimeout(()=>{
          myLocalStorage.data[key]=null; 
        },time);
    },
    getItem:(key)=>{
        return myLocalStorage.data[key]
    }
}
myLocalStorage.setItem('foo', 'bar', 2000);
myLocalStorage.setItem('new', 'new1', 1000);
myLocalStorage.setItem('first', 'first1', 5000);

console.log(myLocalStorage.getItem('foo'));
console.log(myLocalStorage.getItem('first'));

setTimeout(() => {
  console.log(myLocalStorage.getItem('foo'));
  console.log(myLocalStorage.getItem('first'));
}, 4000);


// localStoirage vs sessionStorage 
// setTimeOut vs SetIntrerval

export default LocalStoragee;