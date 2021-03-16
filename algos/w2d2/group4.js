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
// if no matches\, return empty array

function findConsqSums(arr, k) {
    let newArr = [];
    let tempArr = [];
    for (var i=0; i<arr.length; i++){
        for (var j=arr.length; j>i; j--){
            let sum = 0;
            tempArr = arr.slice(i,j);
            for (var d=0; d<tempArr.length; d++){
                sum += tempArr[d];
            } if(sum < k){
                break;
            } else if (sum == k){
                newArr.push(tempArr);
            }
        }
    } return newArr;
}

x = 16;
myArr = [2, 5, 3, 6, 7, 0, 0, 23, 11];
console.log(findConsqSums(myArr, x))
