//Nested Array - Arrays of Arrays

let nums = [
  [2, 4],
  [3, 6],
  [4, 2],
];

// console.log(nums[0]); // to access first array

// arr[i][j]
console.log("nums", nums[0][0]); // to access array 1st array 1st element

//-------------------------------------------------
//Tic-Tac

let game = [[0,"x",null] , [null,"x",0] , ["0",null,0]];
console.log(game);

game[2][1] = "x"; //change value through indices

console.log(game);