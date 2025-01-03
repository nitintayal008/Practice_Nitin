// There are many ways to create a object in javascript

// 1. Object literal

const obj1={
    name:"john",
    age:25,
    gender:"Male",
    greek : function() {
        console.log("Hello");
    }
}

console.log(obj1);

// 2. using the new Keyword

const obj2 = new Object();
console.log("naina__", obj2);
obj2.name="nitin tayal";
obj2.age=25;
obj2.status="single";
obj2.gender = "male";
console.log(obj2);

// 3. using object constructor

function object(){
    this.name="piyush";
    this.age=25;
}

const obj3= new object();

console.log(obj3);
console.log("nnnnn",Object.entries(obj3));
for(const [key, value] of Object.entries(obj3)){
    console.log(key, value);
}
// 4. Object.assign // it also do shallow copy of the object that is at the top level only
// its syntex is Object.assign(target, ...sources)
// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// Output: { a: 1, b: 2, c: 3 }

let obj4 = Object.assign({}, obj1, obj2);
console.log("egfdsc", obj4);
console.log("target", obj1);

let obj5 = Object.assign({}, obj4);
obj5.name="piyush";
console.log(obj5);
console.log(obj4);

//use case of Object.assign is two merge objects, shallow copy, and to add/update properties to an object 

// 5. Object.create
// it cretes a new object ffrom the existing objetc as the prototype of the new object                  
