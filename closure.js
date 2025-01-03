// /./closures in js 
// a closure is a function taht remembers the variables from its outer scope, eventafter the outer 
// function complete executing , this allow the innerfunction to access and manipulate variables 
// that were in scope when the function is created.

function outerFunction(outervalue){
    const y=  function(innervalue){
         
        console.log(`the value is ${outervalue}`);
        console.log(`the value is ${innervalue}`);
        return y;
    };
}


const newFunction = outerFunction(4);
newFunction(6);

// here the innerfunction has access of outerVaraible that is waht Closures is in javascript 

// with regard to this what is currying in js

function multipy(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}


const result = multipy(2)(1)(4);
console.log(result);


//exAMPLE OF CLOSURE IS         

function a(){
    var a =7;
    function b(){
        console.log(a);
    }
    return b;
}

var z = a();
console.log(z);