// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted
var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr.slice()));
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
    for (var i = 0; i < arr.length - 1; i++) {
        var minidx = i;
        for (var j = i + 1; j < arr.length - 1; j++) {
            if (arr[minidx] > arr[j]) {
                minidx = j;
            }
        }
        var temp = arr[minidx];
        arr[minidx] = arr[j];
        arr[j] = temp;

    }
    return arr;
}

var arr1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.pngfunction selectionSort(arr) {


console.log(selectionSort(arr1));