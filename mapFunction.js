//Method 1
function modifyArray1(nums) {
  var something = function (n) {
    if (n % 2 == 0) return n * 2;
    else return n * 3;
  };
  var newArray = nums.map(something);
  return newArray;
}
console.log("1:", modifyArray1([1, 2, 3, 4, 5, 6]));

//Method 2
function modifyArray2(nums) {
  var something = function (n) {
    var a = n % 2 == 0 ? n * 2 : n * 3;
    return a;
  };
  var newArray = nums.map(something);
  return newArray;
}
console.log("2:", modifyArray2([1, 2, 3, 4, 5, 6]));

//Method 3
function modifyArray3(nums) {
  var something = (n) => (n % 2 == 0 ? n * 2 : n * 3);
  var newArray = nums.map(something);
  return newArray;
}
console.log("3:", modifyArray3([1, 2, 3, 4, 5, 6]));

//Method 4
function modifyArray4(nums) {
  var newArray = nums.map((n) => (n % 2 == 0 ? n * 2 : n * 3));
  return newArray;
}
console.log("4:", modifyArray4([1, 2, 3, 4, 5, 6]));

//Method 5
function modifyArray5(nums) {
  return nums.map((n) => (n % 2 == 0 ? n * 2 : n * 3));
}
console.log("5:", modifyArray5([1, 2, 3, 4, 5, 6]));
