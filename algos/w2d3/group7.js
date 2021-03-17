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
    let total=(arr.length+1)*(arr.length)/2
    for(let x of arr){
        total-=x
    }
    return total
}
console.log(findMissingValue([3, 0, 1]));
console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]));






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
// best case, num is right at the beginning. O(1)
// average case, num is right in the middle. O((1/2)n)=O(n)
// worst case, num is right at the end. O(n)
function minOfSorted(arr) {
    if(arr[arr.length-1]>arr[0]) return arr[0];
    for(var i=0; i<arr.length;i++) {
        if (arr[i] > arr[i+1]) {
            return arr[i+1];
        }
    }
}
console.log(minOfSorted([13, 17, 18, 3, 5, 6, 8, 9, 10]));
console.log(minOfSorted([5, 6, 8, 9, 10, 13, 17, 18]));
