// polyfills of find method -> every some are also made like this only by 
// slight modification in the code

const array = [2,4,6,8,10];

const newArray = array.find((a)=>a>10);

console.log(array);
console.log(newArray);

Array.prototype.myfind = function(cb){
    for(let i=0; i<this.length; i++){
        console.log(cb(this[i]));
        if(cb(this[i])){
            return this[i];
        }
    }
    return "no"
};


const neww = array.myfind((a)=> a>10);
console.log(neww);