// let str = "hi aayush";

// let result = str.split(" ").map((nit)=> nit.split("").reverse().join(""));

// console.log(str);

// console.log(result.join(" "));

// var str = "apple is good";

// function myFunction( str ){
//     return str.split("").sort().join("");
// }

// console.log(myFunction(str));

// function newFunction(str){
//      str.split(" ").map((nit)=>
//         { return nit.charAt(0).toUpperCase() + nit.substring(1)}
// );
// }


// console.log(newFunction(str));

// new question

// var str = "nnnitin";
// function occurenceCheck(str){
//     var result = str.split("").reduce((acc, cur)=> {
//         acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
//         return acc;
//     },{});
//     console.log(result);
// }

// console.log(occurenceCheck(str));

// // write a javascript function to get the number of occurence of each letter in a string.

// function countLetterOccurrences(str) {
//     return str.toLowerCase().split('').reduce((acc, char) => {
//         // Check if the character is a letter
//         if (/[a-z]/.test(char)) {
//             acc[char] = (acc[char] || 0) + 1;
//         }
//         return acc;
//     }, {});  // Initialize the accumulator as an empty object
// }

// // Example usage
// const result = countLetterOccurrences("Hello World!");
// console.log(result);

// function chechOccurence(str){
//     return str.toLowerCase().split("").reduce((acc, cur)=>{
//         acc[cur] = acc[cur] ? acc[cur]+1 : 1;
//         return  acc;
//     }, {});
// }

// console.log(chechOccurence("nitin"));

// console.log(/[a-z]/.test("1"));


//next Question

var arr = [
    {name: "Nitin", gender: "male"},
    {name:  "piyush", gender : "female"}
]

arr.map((nit)=> {
    console.log(nit.name);
    if(nit.gender == "male"){
        return;
    }
})
