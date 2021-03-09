// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
var myArray = [2, 6, 4, 9, 1, 3];
console.log(bubbleSort(myArray));

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr) {
    for (var j = 0; j < arr.length; j++) {
        var lowest = j;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < arr[lowest]) {
                lowest = i;
            }
        }
        var temp = arr[j];
        arr[j] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}
var myArray2 = [2, 6, 4, 9, -1, 3];
console.log(selectionSort(myArray2));



// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.pngfrnf