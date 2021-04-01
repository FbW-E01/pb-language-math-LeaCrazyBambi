//  1. Minimum and maximum
//  a. Lowest Number & b. Highest Number
console.log(Math.min(-1, 0, 1, 2, 3, 4));
console.log(Math.max(-1, 0, 1, 2, 3, 4));

//  2. Rounding
//  a. Round up
const num = 3321.32321;
console.log(Math.ceil(num));

const numTwo = 326.76;
console.log(Math.ceil(numTwo));

const numThree = 76788.7;
console.log(Math.ceil(numThree));

const numFour = -9.78;
console.log(Math.ceil(numFour));

const numFive = 28.329;
console.log(Math.ceil(numFive));

// b. Round down
const numDownOne = 3321.32321;
console.log(Math.floor(numDownOne));

const numDownTwo = 326.76;
console.log(Math.floor(numDownTwo));

const numDownThree = 76788.7;
console.log(Math.floor(numDownThree));

const numDF = -9.78;
console.log(Math.floor(numDF));

const numLast = 28.329;
console.log(Math.floor(numLast));

// 3. Dice Roll!
console.log(Math.random() * 6);