numbers = [5, 4, 7, 10, 6, 9, 5, 4, 50, 15, 14, 30];

function evenNums(arr) {
  const evens = arr.filter((num) => num % 2 == 0);
  return evens;
}

function largestNum(arr) {
  const largestNumber = arr.reduce((max, curr) => {
    return max > curr ? max : curr;
  }, arr[0]);
  return largestNumber;
}

function removeDuplicated(arr) {
  const uniqeNum = arr.reduce((uniqeArr, curr) => {
    if (!uniqeArr.includes(curr)) {
      uniqeArr.push(curr);
    }
    return uniqeArr;
  }, []);
  return uniqeNum;
}

console.log(evenNums(numbers));
console.log(largestNum(numbers));
console.log(removeDuplicated(numbers));

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Asmaa"));
