// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)


// [88, 22, 44, 12, 99, 111, 9, 15, 49];

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }
    arr1 = mergeSort(arr.slice(0,Math.floor(arr.length/2)))
    arr2 = mergeSort(arr.slice(Math.floor(arr.length/2, arr.length )))
    return mergeSortedArrays(arr1,arr2)
}


function mergeSortedArrays(arr1, arr2) {
    let i = 0
    let j = 0
    let newarr = []
    while(i<arr1.length && j < arr2.length){
        if (arr1[i]>arr2[j]) {
            newarr.push(arr2[j])
            j++;
        }
        else{
            newarr.push(arr1[i])
            i++;
        }
    }
    if(i<arr1.length){
        for(i; i<arr1.length; i++){
            newarr.push(arr1[i])
        }
    }
    else{
        for(j; j<arr2.length; j++) {
            newarr.push(arr2[j])
        }
    }
    return newarr;
}

console.log("hi")
console.log(mergeSort([88, 22, 44, 12, 99, 111, 9, 15, 49]))

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);