//*-----------------------------------------------
//* Coding Challenge: Simple Password Validator
//*-----------------------------------------------

//* Write a function called simplePasswordValidator that takes a single parameter:

//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:

//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise, it should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? false otherwise.

//* Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.

function simplePasswordValidator(para){
    var lowerChack = false;
    var UpperChack = false;
    var numchack = false;
    if(para.length<=2){
        return "not valid pass"; 
    }

    para = para.split("");
    para.map((currChar)=>{
        if( currChar == currChar.toLowerCase() && !lowerChack){
            lowerChack = true
        }
        if( currChar == currChar.toUpperCase() && !UpperChack){
            UpperChack = true
        }
        if( !isNaN(Number(currChar) && numchack)){
            numchack= true;
        }
        console.log(numchack);
        return lowerChack + UpperChack + numchack;
    })
}


console.log(simplePasswordValidator("3hN"));
