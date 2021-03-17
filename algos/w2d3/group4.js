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
// sum w/o missing numb: n*(n+1)/2

function findMissingValue(arr) {
    let n = arr.length
    let totalSumWOMissingNumb = n*(n+1)/2;
    for(var i=0; i<arr.length; i++){
        // console.log(arr[i])
        totalSumWOMissingNumb -= arr[i];
    }
    return totalSumWOMissingNumb;
}
console.log(findMissingValue([3, 0, 1]))

// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// given [13, 17, 18, 3, 5, 6, 8, 9, 10]
//             1   2  3
// return 3

// [1,2,3]
// [2,3,1]
// [3,1,2]

function minOfSorted(arr, left, right) {
    //base case
    if (arr.length == 2){
        if(arr[0] > arr[1]){
            return arr[1];
        }
    }else if(arr.length == 3){
        if(arr[0] > arr[2]){

        }else{
            return null
        }
    }
    let mid = Math.floor((left+right/2));
    //switch between the 2!
    minOfSorted(arr, left, mid)
    minOfSorted(arr, mid+1, right)
}
console.log(minOfSorted([13, 17, 18, 3, 5, 6, 8, 9, 10]))
