// https://leetcode.com/problems/two-sum/

const twoSums = (arr, target) => {
    let returnArray =[]
    for (var i=0; i<arr.length; i++){
        for (var j=i+1; j<arr.length; j++){
            if (arr[i] + arr[j] == target){
                returnArray.push(i);
                returnArray.push(j);
            }
        }
    } return returnArray;
};

console.log(twoSums([2, 11, 7, 15], 9))

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].