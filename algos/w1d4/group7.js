// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif




// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

const arr = [1, 3, 4, 5, 8, 0, 5, 6, 2];
let Partition = (arr, left = 0, right = arr.length - 1) => {
    // console.log(arr[left], arr[right]);
    let pividx = Math.floor((right + left) / 2);
    let pivot = arr[pividx]; // choosing middle element as pivot
    console.log(pivot);
    [arr[pividx], arr[right]] = [arr[right], arr[pividx]]
    let rptr = right - 1
    let lptr = left
    console.log(arr)
    while (rptr > lptr) {
        while (arr[lptr] < pivot) {
            lptr++;
        }
        while (arr[rptr] > pivot) {
            rptr--;
        }
        if (rptr >= lptr) {
            [arr[lptr], arr[rptr]] = [arr[rptr], arr[lptr]];
            lptr++;
            rptr--;
        }
        console.log(arr)
        console.log(lptr, rptr)
    }
    [arr[right], arr[lptr]] = [arr[lptr], arr[right]]
    console.log(arr)
    return lptr
}

console.log(Partition(arr));