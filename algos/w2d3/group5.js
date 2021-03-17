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
    var x = 0;
    for(let i=0; i < arr.length; i++){
        x = x +1;
        if(arr[i] != x){
            return (x+1);
        }
    }

}
console.log(findMissingValue([3,0,1]));

//another solution
function findMissingValue(arr) {
    let max = arr.length
    //total is equation for sum of consecutive numbers
    let total = Math.floor(((max+1)/2) * (max))
    for(let i=0; i<max; i++){
        //subtract each value from the total sum and you're left with the missing num
        total -= arr[i];
    }
    return total;
}

console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]))

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

function minOfSorted(arr, ...) {
    for(let i = 0; i > arr.length; i++){

}