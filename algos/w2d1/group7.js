// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newarr = []
    while( i < arr1.length && j < arr2.length){
        while( arr1[i] < arr2[j]){
            i++;
        }
        while( arr1[i] > arr2[j]){
            j++;
        }
        if(arr1[i] == arr2[j] && arr1[i] != newarr[newarr.length-1]){
            newarr.push(arr1[i]);
        }
        i++;
        j++;
    }
    return newarr;
}
