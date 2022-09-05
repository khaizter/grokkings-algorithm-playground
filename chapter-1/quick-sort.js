const sort = (arr) => {
  // base case
  if (arr.length === 1 || arr.length === 0) return arr;
  // recursive case
  else {
    const pivotIndex = Math.ceil(arr.length / 2 - 1);
    const pivot = arr[pivotIndex];
    const leftOuts = arr.filter((item, index) => index !== pivotIndex);
    const left = leftOuts.filter((item) => item < pivot);
    const right = leftOuts.filter((item) => item >= pivot);
    return [...sort(left), pivot, ...sort(right)];
  }
};

const myArr = [7, 1, 8, 3, 2, 3, 5];

console.log(sort(myArr));
