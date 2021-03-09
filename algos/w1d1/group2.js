// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for (i = 0; i < arr.lenght; i++) {
        for (x = 0; x < arr.length - i - 1; x++) {
            if (arr[x] > arr[x + 1]) {
                var a = arr[x + 1];
                arr[x + 1] = arr[x];
                arr[x] = a;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([9, 2, 8, 3]));


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


function selectionSort(arr) {}

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.pngfar;