const fibonacci = (num)=>{
    console.log(num);
    if(num<=1){
        return num;
    }
    return fibonacci(num) + fibonacci(num-1);
}

console.log(fibonacci(10)); // Output: 5



//factorial of the num
const factorial = (num) => {
    if (num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  };