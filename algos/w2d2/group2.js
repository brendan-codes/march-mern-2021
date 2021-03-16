// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array
arr = [2,5,5,8,0,2,7,5];
k = 10;
function findConsqSums(arr, k) {

var i =0;
var b = 0;
newArr = [];
allArr =[];
temp = 0;
for (var j = 0; j< arr.length; j++){
    while (temp + arr[i+1] <= k){
    temp = temp + arr[i+1];
    i++;
    b++;
    console.log(temp, arr[i], i, j);
    if (temp == k){
        for (var l = 0; l<b;l++){
        newArr.push(arr[i-l]);

        }allArr.push(newArr);

    }
    }i=j;
    b=0;
}
return allArr;
}

console.log(findConsqSums(arr,k));
}
