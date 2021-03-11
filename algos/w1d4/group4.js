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

let Partition = (arr, left = 0, right = arr.length - 1) => {
	let upIndex = left;
	let downIndex = right;
	let pivotVal = arr[left];
	while (upIndex < downIndex) {
		while (arr[upIndex] <= pivotVal && upIndex < right) upIndex++;
		while (arr[downIndex] > pivotVal && downIndex > left) downIndex--;
		if (upIndex < downIndex)
			[arr[upIndex], arr[downIndex]] = [arr[downIndex], arr[upIndex]];
	}
	[arr[left], arr[downIndex]] = [arr[downIndex], arr[left]];
	console.log(arr);
	return downIndex;
};
console.log(Partition([51,25,-35,100,251,1,56,-500]));

    
    // https://opendsa-server.cs.vt.edu/embed/quicksortAV
    // https://www.youtube.com/watch?v=ZZuD6iUe3Pc
    // https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif




// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value
/

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

let Partition = (arr, left = 0, right = arr.length - 1) => {


        console.log(arr);
    } // https://opendsa-server.cs.vt.edu/embed/quicksortAV
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

let Partition = (arr, left = 0, right = arr.length - 1) => {


    console.log(arr);
}