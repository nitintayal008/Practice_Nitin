//? Write a function called countChar that takes two parameters: a string and
// a character to count. The function should return the number of times the specified
// character appears in the string.

// with the help of forEach and map i did this question

function countChar(str, ch){
    let count =0;
    str = str.split(" ");
    str.forEach((curStr)=>{
        curStr.split("").map((cur)=>{
            if(cur == ch)
                count++;
        })
    })
    return count;
    
}

//now i can do this with the reduce also
//reduce((acc, cur)=>return cur),[])
function countChar(str, ch){
    str = str.split(" ");
    return str.reduce((acc, curr)=>{
        curr.split("").map((cur)=>{
            console.log(cur)
            if(cur == ch){
             acc++;
            }
        })
        return acc;
    }, 0)
}

console.log(countChar("my name is nitin, and nitin is devloper","n" ))