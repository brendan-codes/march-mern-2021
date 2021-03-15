// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates).

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let newarr = [];

    if(set1.length >= set2.length){
        for(let val of set1){
            if(set2.has(val)){
                newarr.push(val);
            }
        }
    }else{
        for(let val of set2){
            if(set1.has(val)){
                newarr.push(val);
            }
        }
    }
    return newarr;
}
const a = [1,2,2,2,7]
const b = [2,2,6,6,7]
console.log(intersection(a,b))

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