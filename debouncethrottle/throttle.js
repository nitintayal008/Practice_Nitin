// calling an api after certain interval of time 

// var searchBarDom = document.getElementById('search-bar');
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// const  getSearchResult =  throttleFunction(() =>{
//     numberOfApiCalls += 1;
//     console.log('Number of API Calls : ' + numberOfApiCalls);
//   }, 1000);

// searchBarDom.addEventListener('input', function (e) {
//   numberOfKeyPresses += 1;
//   console.log('Search Keyword : ' + e.target.value);
//   console.log('Number of Key Presses : ' + numberOfKeyPresses );
//   getSearchResult();
// });

// function throttleFunction(func, delay){
//   let shouldWait = false;
//   return(...args)=>{
//       if (!shouldWait) {
//           func(...args);
//           shouldWait = true;
//           setTimeout(()=>{
//               shouldWait = false;
//           }, delay);
//       }
//   }
// }


// Array.prototype.myReduce = function(cd, initialValue){

//   let acc = initialValue;
//   let startIndex =0;

//   if(initialValue  === undefined){
//     if(this.length ==0){
//       throw new TypeError("nooo")
//     }
//     acc = this[i];
//     startIndex=1;
//   }  

//   for(let i=0;i<this.length; i++){
//     acc =  cd(acc, this[i]); 
//   }
//   return acc;
// }

// let obj1 ={
//   name: "Nitin Tayal"
// };

// let obj2 ={
//   name: "piyush Tayal"
// }

// function printAge(age){
//   console.log(age);
//   console.log(`${this.name} is ${age}`)
// }

// Function.prototype.mybind = function(obj ={}, ...args){
//   if(typeof this!== "function"){
//     throw new Error("Not callable");
//   }
//   if(!Array.isArray(...args1)){
//     throw new Error("TypeError: CreatelistArrayLike called on non-object");
//   }
//   obj.fn = this;
//   return function (...args2){
//     obj.fn(...args1, ...args2);

//   }
// }

// printAge.mycall(obj2, [27, 29]);


// function findDuplicates(arr){
//   return arr.filter((item, index)=> arr.indexOf(item)==index)
// }

// console.log(findDuplicates([1, 2, 3, 4, 3, 2]));

// let arr = [
//   ["name", "John"],
//   ["age", 30],
//   ["city", "New York"],
// ];

// console.log(Object.fromEntries(arr));
 
// // let output = { name: "John", age: 30, city: "New York" };
// console.log("hello",Object.entries(Object.fromEntries(arr)))

//new
console.log([2,4].map((temp)=>{
  if(temp>0) return;
  return temp*2;
}))


//new
function abc(){
  return ;
}

console.log(abc());

//new
{
  function abc(){
    console.log("nitin");
  }
}

abc();

console.log(name);
var name = "John";


const arr = [1,2,3,4,5,6,7,8];
const newArr = arr.find((temp)=>temp>4);
console.log(newArr);

const arr1 =[1, 'd', 3, 'r', 5, 5];
arr1.forEach((temp)=>{
  console.log(typeof temp);
})

function curring(a){
  return function(b){
    return function(c){
      return a+b+c;
    } 
  }
}

const curringe = curring(1)(2)(3);
console.log(curringe);
