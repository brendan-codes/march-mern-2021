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

let Partition = (arr, left = 0, right = arr.length - 2) => {
    let pivot = arr.length - 1 //start at the end
    while (left < right){
        while (arr[left] < arr[pivot]) {
                left++;
            }
        while (arr[right] > arr[pivot]) {
            right--;
            }
        [arr[right], arr[left]] = [arr[left], arr[right]];  
    }
    [arr[left], arr[pivot]] = [arr[pivot], arr[left]];
    return left;
}
    // if (left == right){
    //     arr[left] with arr[pivot]
    // }
    console.log(arr)
[18, 41, 65, 16, 75, 54, 63]