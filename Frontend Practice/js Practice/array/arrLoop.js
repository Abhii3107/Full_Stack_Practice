//Acces each elemet through loop
// let fruits = ["mango", "apple", "banana", "litch"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

//nested loop
let heroes = [
  ["army", "navy", "air-Force"],
  ["Farmers", "helpers", "selfless-people"],
];

for (let i = 0; i < heroes.length; i++) {
  console.log(`i=${i} ,row =${i}-`,heroes[i]);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`j=${j},values=${j} ,${heroes[i][j]}`);
  }
}
