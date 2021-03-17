// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6


function findMissingValue(arr) {
    arr.sort();
    for (var i=0; i<arr.length; i++){
        if (arr[i] != i){
            return i;
        }
    } return arr.length;
}

console.log(findMissingValue([3, 2, 1, 0]));

function findMissingValueV2(arr) {
    var max = arr[0];
    var sum = 0;
    var actualTotal = arr.length;
    for (let i = 0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        sum += arr[i];
        actualTotal += i;
    }
    if (arr.length-1 == max) {
        return arr.length;
    }
    else {
        return actualTotal - sum;
    }
}
console.log(findMissingValueV2([5, 2, 7, 8, 6, 9, 3, 0, 1]));


// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// given [13, 17, 18, 3, 5, 6, 8, 9, 10]
// return 3

// [1,2,3]
// [2,3,1]
// [3,1,2]

function minOfSorted(arr) {
    for (var i=0; i<arr.length; i++){
        if (arr[i] > arr[i+1]){
            return arr[i+1];
        }
    }
}

console.log(minOfSorted([13, 17, 18, 3, 5, 6, 8, 9, 10]));



function minOfSortedBinary(arr) {
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid-1]>arr[mid]) return arr[mid];
        else if (arr[start] > arr[start+1]){
            return arr[start+1];
        }
        else if (arr[end] < arr[end-1]){
            arr[end];
        } else {
            start++;
            end--;
        }
    }
}

console.log(minOfSortedBinary([13, 17, 18, 3, 5, 6, 8, 9, 10]));
