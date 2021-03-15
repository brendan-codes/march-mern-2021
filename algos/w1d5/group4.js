const arr = [62,1,83,4,61,28,94,6];

const partition = (arr, left = 0, right = arr.length - 1) => {
	let upIndex = left + 1;
	let downIndex = right;
	const pivotValue = arr[left];
	while (upIndex < downIndex) {
		while (arr[upIndex] <= pivotValue && upIndex < right) upIndex++;
		while (arr[downIndex] > pivotValue && downIndex > left) downIndex--;
		if (upIndex < downIndex)
			[arr[upIndex], arr[downIndex]] = [arr[downIndex], arr[upIndex]];
	}
	[arr[left], arr[downIndex]] = [arr[downIndex], arr[left]];
	return downIndex;
};
console.log(partition(arr));
console.log(arr)


function quickSort(arr, left = 0, right = arr.length - 1) {
    // - base case: if left is greater than right, return
    if (left >= right) return;
    // - start by partitioning the full array (use the previously built partition algo, from the left to the right)
    const pivotIndex = partition(arr, left, right);
    // - using the pivot as a new center, call quicksort again for left side of the array (left of new pivot idx)
    quickSort(arr, left, pivotIndex-1);
    //   and the right side of the array (right of new pivot idx)
    quickSort(arr, pivotIndex+1, right);
}
quickSort(arr);
console.log(arr);