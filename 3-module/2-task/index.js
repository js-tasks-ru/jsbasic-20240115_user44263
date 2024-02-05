function filterRange(arr, a, b) {
  return arr.filter(function(item) {
    return item >= a && item <= b;
  });
}

let arr = [5, 3, 8, 1, 2, 9, 4];
let filtered = filterRange(arr, 3, 5);
console.log(filtered); // [5, 3, 4]
console.log(arr);