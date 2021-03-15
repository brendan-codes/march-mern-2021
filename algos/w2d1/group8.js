// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    var newObj1 ={};
    var newObj2 = {};
    var newArr = [];
    for (val in arr1) {
        newObj1[arr1[val]] =arr1[val];
    }
    // {1:1, 2: 2, 7: 7}

    console.log(newObj1);

    for (val in arr2) {
        newObj2[arr2[val]] = arr1[val];
    }
    // {2:2, 6:?, 7:?}

    console.log(newObj2);

    for(var i of Object.keys(newObj1, newObj2)){
        // console.log(newObj1[i], newObj2[i]);
            if(newObj1[i] == newObj2[i]) {
                newArr.push(i);
            }
        }

    return newArr;
}
console.log(intersection([1,2,2,2,7], [2,2,6,6,7]));
