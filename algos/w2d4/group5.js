// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {
    let calculated = {};
    //loop through nums
    for(var i = 0; i<nums.length; i++){
        //check if match: self is a corresponding pair in the dictionary
        if (nums[i] in calculated){ //v.s. hasOwnProperty()?
            let correspondingIdx = calculated[nums[i]];
            return [correspondingIdx, i];
        }
        //Add the calculated corresponding pair to dictionary{key=target - nums[i] : value=seft index}
        else{
            calculated[target - nums[i]] = i;
        }
    }
};
console.log(twoSums([2, 11, 7, 15], 9))

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2]