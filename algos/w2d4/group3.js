// https://leetcode.com/problems/two-sum/

// const twoSums = (nums, target) => {};

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].

// O(n^2)
    const twoSums = (nums, target) => {

        var sum = [];

        for (var i = 0; i < nums.length; i++) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    sum.push(i);
                    sum.push(j);
                }
            }
        }
        return sum;
    }
    console.log(twoSums([2, 11, 7, 15], 9));


const twoSums = (nums, target) => {
	const pastVals = {};
	let tempKey = nums[0];
	let tempVal = 0;
	pastVals[nums[0]] = 0;
	for (let i = 1; i < nums.length; i++) {
		tempKey = nums[i]; 						//current value in nums at i
		tempVal = i;								//current index of nums
		let difference = target - tempKey;
		if (difference in pastVals)				//if pastVals has a key that equals difference
			return [pastVals[difference], i]; 	//...if so, that's our match
		else pastVals[tempKey] = tempVal; 		//if not, add it and move on
	}
};
console.log(twoSums([2, 11, 7, 15], 9));

