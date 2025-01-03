//? 18: Write a function to convert a string to camelCase & snake_case.


function camelCase(str){
    let temp ="";
    str = str.split(" ");
    temp += str[0].charAt(0).toLowerCase() + str[0].slice(1);
    str.shift();
    str.forEach((curEle)=>{
        temp+= curEle.charAt(0).toUpperCase() + curEle.slice(1);
    })
    return temp;
}

console.log(camelCase("hello nitin how are yoddu   esd"));
//helloNitinHowAreYodduEsd


function snakeCase(str){
    let temp ="";
    str = str.split(" ");
    temp += str[0].charAt(0).toLowerCase() + str[0].slice(1);
    str.shift();
    str.forEach((curEle)=>{
        temp+= `_${curEle.charAt(0).toLowerCase()}` + curEle.slice(1);
    })
    return temp;
}

console.log(snakeCase("hello nitin How are yoddu esd"));
