// add "somthing" before given string in function 
const giveMeSomething = (str) => {
    let str2 = "something"
    return `${str2} ${str}`;
}
 
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));


// Area of a Triangle`

const triArea = (base , height) => {
     return base*height/2; 
}

  console.log(triArea(3, 2));
  console.log(triArea(7, 4));
  console.log(triArea(10, 10));