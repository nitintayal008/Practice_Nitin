// lets make bind polyfill

obj1={
    x:1,
    y:2
}

function totalSum(){
    console.log(this.x + this.y)
}

myFunc = totalSum.bind(obj1);
console.log("hello main", myFunc());

// console.log(totalSum.bind(obj1));

Function.prototype.myBind = function(obj ={}, ...args){
    obj.fn = this;
    console.log("rcd",this);
    
    return function(args2){
        obj.fn(...args, args2)
    }
}

calculateSum = totalSum.myBind(obj1);
console.log(calculateSum());

// the other way

Function.prototype.my2Bind = function(...args1){
    obj =  this;
    console.log(obj);
    return function(...args2){
        obj.apply(args1[0],[ args1.slice(1), ...args2])
    }
}

calculateSum = totalSum.my2Bind(obj1);
console.log(calculateSum());