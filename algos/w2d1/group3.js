// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

const intersection =(arr1, arr2) => {
    let index1 = 0;
    let index2 = 0;
    let union = [];
    
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] == arr2[index2]) {
          if ( union[union.length -1] != arr1[index1]) {
            union.push(arr1[index1]);
        }
       index1 ++;
       index2 ++;
       }
       else if (arr1[index1] < arr2[index2]) {
       index1++;
       }
       else {
       index2++;
       }
    }
    return union
    }
    
    console.log(intersection([1,2,2,2,7], [2,2,6,6,7]))
    
// remember that the inputs and outputs are already sorted!!

// 1-255
// are the lengths of the inputs the same? no
// please do not use any built in or helper functions
// ideal solution is solve for 0(n) if you can
// can they be negative? no
// can the arrays be empty? yes

// sets contain only unique values
// multisets can contain duplicates

// you may use addtional arrays or objects as temporary storage (space constaints)