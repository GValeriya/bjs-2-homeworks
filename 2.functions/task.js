function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let avg = +(sum / arr.length).toFixed(2); 
  
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams());



function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(summElementsWorker());

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}
console.log(differenceMaxMinWorker());

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let number of arr) {
    if(number % 2 === 0) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker());

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let number of arr) {
    if (number % 2 === 0){
      sumEvenElement += number;
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker());



function makeWork(arrOfArr, func) {
  const newArr = arrOfArr.map(arr => func(...arr));
  return Math.max(...newArr);
};

console.log(makeWork());
