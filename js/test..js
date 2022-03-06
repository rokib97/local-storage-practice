const myObj = {};
const name = "firstName";
myObj[name] = 10000;
const newObj = JSON.stringify(myObj);
console.log(newObj);
