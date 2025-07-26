"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) ) / (2 * a) , (-b - Math.sqrt(d) ) / (2 * a)];
  }
  
  return arr;
}
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) / 12;
  let s = amount - contribution;
  let n = countMonths;
  let payInMonth = s * (p + (p / (((1 + p) ** n) - 1))); 
  let sum = +(payInMonth * countMonths).toFixed(2);

  return sum;
}
console.log(calculateTotalMortgage());