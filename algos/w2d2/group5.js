// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
const k = 16
const arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new array
// if no matches, return empty array

//psuedo Code
//create a loop to iterate through the array
//checking each index to see if it is consecutive

function findConsqSums(arr, k) {
    for (val in arr) {
        console.log(val);
    }
}




console.log(findConsqSums(arr,k));


function findConsqSums(arr, k) {
    let allArr = [];
    for(let i=0; i<arr.length; i++){
        let sum = arr[i];
        let temp = [arr[i]];
        for(j=i+1; j<arr.length; j++){
            if(sum<=k){
                sum+=arr[j];
                temp.push(arr[j]);
                if(sum == k){
                    allArr.push(temp);
                    console.log('I am temp: ', temp);
                }
            }
        }
    }
    return allArr;
}

console.log(findConsqSums([2, 5, 3, 6, 7], 16))