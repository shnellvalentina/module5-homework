let arr = [5, 5, 5, 5, 5, 5];
let result = arr.every(function(item) {
  return item === arr[0];
});
console.log(result);