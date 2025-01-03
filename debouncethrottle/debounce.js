//debounce cponcept
// if the difference between two stroke call is more then 300 
// ms then call that poarticular api
const callap = ()=>{
    console.log("hello");
}

const debounce=( fn ,delay)=>{
    let timer;
    return(...args)=>{
        clearInterval(timer);
        timer = setTimeout(()=>{
            fn(...args)
        }, delay)
    }
}
 
const throttle= (fn, limit)=>{
    let flag = true;
    return (...args)=>{
        if(flag){
            fn();
            flag = false;
            setTimeout(()=>{
                flag = true;
            }, limit)
        }
    }
}

const getData = throttle(callap, 1000);
console.log("Hello tehre",getData(hello));


//new
var searchBarDom = document.getElementById('search-bar');
var numberOfKeyPresses = 0;
var numberOfApiCalls = 0;
const getSearchResult= debounceFunction(()=> {
    numberOfApiCalls += 1;
    console.log('Number of API Calls : ' + numberOfApiCalls)},1000)

searchBarDom.addEventListener('input', function (e) {
  numberOfKeyPresses += 1;
  console.log('Search Keyword : ' + e.target.value);
  console.log('Number of Key Presses : ' + numberOfKeyPresses );
  getSearchResult();
});

function debounceFunction(func, delay){
    let timeInterval; 
    return (...args)=>{
        clearInterval(timeInterval);
        timeInterval = setTimeout(()=>{
            func(...args);
        },delay)
    };
}

//find duplicates in array


function findDuplicates(arr){
    return arr.filter((item, index)=> arr.indexOf(item)==index)
}

console.log(findDuplicates([1, 2, 3, 4, 3, 2]));
