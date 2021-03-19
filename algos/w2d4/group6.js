// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {
    var newArr = [];
    var finishedArr = [];
for(i=0; i< nums.length;i++) {
    if(nums[i] <= target) {
    newArr.push(nums[i]);
    }
    for (x=0; x< newArr.length; x++) {
        if (newArr[x] + newArr[x+1] == target) {
            finishedArr.push(newArr[x], newArr[x+1])
            return finishedArr;
        }
    }
}
};
console.log(twoSums([2, 11, 7, 15], 9));

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].




//manny:

const nums = [2, 11, 7, 15];
const target = 9;
const twoSums = (nums, target) => {
    const sumObj = {};
    const newArr = [];
    for (let i = 0; i < nums.length; i++) {
        sumObj[i] =nums[i];
        // console.log(sumObj);
    }
    // {0: 2, 1: 11, 2: 7, 3: 15}
    // {2: 0, 11: 1, 7: 2, 15: 3}
    for(var i of Object.keys(sumObj)){
        if(sumObj[i] >= target){
            i++;
        } else {
            for(var j of Object.keys(sumObj)){
                if (sumObj[i] + sumObj[j] == target){
                    newArr.push(j);
                }
            }
        }
    }

    return newArr;
};

console.log(twoSums(nums,target)); //output is array of strings ['0', '2']