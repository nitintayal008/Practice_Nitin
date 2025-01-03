//? You are required to implement a function generateHash that generates a hash 
//tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.


function generateHash(str){
    const splittedhash = str.split(" ");
    str = splittedhash.map((curEle)=>{
        return curEle.charAt(0).toUpperCase() + curEle.slice(1);
    })
    str = `#${str.join("")}`
    return str;
}

console.log(generateHash("my name is nitin tayal"));
// o/p = "#MyNameIsNitinTayal"