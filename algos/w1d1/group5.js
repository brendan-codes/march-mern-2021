// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([1, 4, 3, 2, 23, 7]))
    // Not going to be optimized for time complexity

// Time Complexity2
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
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) min = j;
        }
        if (min > i)[arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}


let selectionSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min != i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr
    }
    // Time Complexity
    //   - Best: O(n^2)
    //   - Average: O(n^2)
    //   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png>=for()()arr;temp;