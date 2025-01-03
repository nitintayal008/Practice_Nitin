//? Q: Write a function findLongestWord that takes a string as input and returns
// the longest word in the string. If there are multiple longest words,
// return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.



function findLongestWord(str){
    let array = [];
    const sepratedString = str.split(" ");
    console.log(sepratedString);
    array.push(sepratedString[0]);
    sepratedString.forEach((temp)=>{
        if(temp.length > array[0].length){
            array.shift();
            array.push(temp);
        }
    })
    return array;
}

console.log(findLongestWord("nitniecsz wrvsd kh siu4e24w8ebj kjqefhhcnee8w9iudackwes ewvds   sdvzx"));
