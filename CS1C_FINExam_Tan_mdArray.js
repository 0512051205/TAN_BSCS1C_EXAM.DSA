let names = prompt("Enter 5 names separated by commas (e.g. lovely,erika,jane,maria,badet)").split(",");
let ages = prompt("Enter 5 ages separated by commas (e.g. 18,25,13,5,7)").split(",").map(Number);

let structuredArray = names.map((name, i) => [name, ages[i]]);

console.log("Restructured Array:");
structuredArray.forEach(pair => console.log(pair));
