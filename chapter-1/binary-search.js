const search = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);
    let guess = list[mid];

    // found it
    if (guess === item) {
      return mid;
    }
    // the guess was lower
    else if (guess < item) {
      low = mid + 1;
    }
    // the guess was higher
    else if (guess > item) {
      high = mid - 1;
    }
  }
  return null;
};

const myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(search(myArry, 11));
