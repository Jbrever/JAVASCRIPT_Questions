// there are the ways to addition of two parameters
// precedense of string is high so that we have to convert String into numbers by (+,*,/) operators

const addition = (num1,num2) =>{
    // return +num1 + +num2;   // (+)operator convert string into number    
    // return num1*1 + num2*1;   //(-,/,*) can convert string to numbers
    // return num1/1 + num2/1;
    // return (num1-1) + (num2-1)+2;
    // return Number(num1) + Number(num2)
    // return parseInt(num1) + parseInt(num2);
    // return Math.ceil(num1) + Math.ceil(num2)
    // return Math.floor(num1) + Math.floor(num2); 
    // return Math.floor(num1/1) + Math.floor(num2/1);
    // return Math.floor(num1) + Math.floor(num2);
}  


console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
console.log(addition("7", "3"));
console.log(addition("7", 3));
