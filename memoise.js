
const memoize =(fn)=>{
    const cache ={};
    return (...args)=>{
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

const expensiveCalculation =(num)=>{
    console.log(" i am called");
    return num*num;
}
const memoizedCalculation = memoize(expensiveCalculation);

console.log(memoizedCalculation(5)); 
console.log(memoizedCalculation(3)); 
console.log(memoizedCalculation(6));
