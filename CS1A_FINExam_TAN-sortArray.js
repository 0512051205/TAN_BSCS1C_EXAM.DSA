let numbersInput = prompt("Enter numbers separated by commas (e.g. 10,45,5,1,8,78,18,90,20):");
let namesInput = prompt("Enter names separated by commas (e.g. Jander,Zie,Malong,Carlos,Totoy)");

let numbers = numbersInput.split(',').map(Number);
let names = namesInput.split(',');

let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

console.log("Numbers Sorted Descending:", [...numbers].sort((a, b) => b - a));
console.log("Names Sorted Alphabetically:", [...names].sort());
