// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {
    for(let i=0; i<=nums.length-1; i++){
        let difference = target-nums[i];
        for(let j=i+1;j<=nums.length-1;j++){
            if(nums[j]===difference){
                return [i, j];
            }
        }
    }
};

const twoSums = (arr, target) => {
    let passed = {};
    for(let i=0; i<=arr.length-1; i++){
        let diff = target - arr[i];
        if(diff in passed){
            return [passed[diff], i]
        }else{
            passed[arr[i]] = i;
        }
    }
}


// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

//have a for loop. Check the first number of the array, subtract
// it from the target


// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].


