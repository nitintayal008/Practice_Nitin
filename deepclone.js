const original = {
    name: "nitin",
    age: 24,
    a: {
        temp1: "tayal",
        bb:33
    },
    makesound(){
       console.log("sound beep"); 
    }
}

// i need to deep clone this throgh different message 

const newObj = JSON.parse(JSON.stringify(original));
newObj.a.bb = 20;
console.log("name", original.a.bb);

//second method 
//manual deep clone 

function deepclone(obj){
    if(obj == null|| typeof obj!== "object")
        return obj;

    //handle array 
    if(Array.isArray(obj)){
        return obj.map(item=>deepclone(item));
    }

    //handle Object
    const copy = {};
    for(const key in obj){
        copy[key] = deepclone(obj[key]);
    }
    return copy;
}

const copy = deepclone(original);
copy.a.bb = 100;
console.log("Deded", original.a.bb);

// we can also do by lodash clonedeep library

const _ = require('lodash');
const copy = _.cloneDeep(original);
//

