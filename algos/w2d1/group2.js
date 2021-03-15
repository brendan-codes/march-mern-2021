// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    if(arr1 == 0 && arr2 == 0) {
        return false;
    } else {
        var newArr = [];
        i = 0;
        k = 0;
        for (i && k == 0; i <= arr2.length && k <= arr2.length ;i++) {
            if (arr1[i] == arr1[i+1]) {
                i++;
            }
            if (arr1[i] == arr2[k]) {
                newArr.push(arr2[k]);
                k++;
            }
        }
    }
    return newArr
}
console.log(intersection([1,2,2,2,7], [2,2,6,6,7]))


