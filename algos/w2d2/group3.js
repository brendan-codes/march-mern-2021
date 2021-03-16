// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsqSums(arr, k) {
    var outputArr = []
    var newArr = [];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
        if (sum < k){
            console.log(sum)
            console.log("if")
            newArr.push(arr[i]);
            sum += arr[i];
            console.log(newArr);
        }else if(sum == k) {
            console.log("else if")
            outputArr.push(newArr);
            sum -= newArr[0];
            newArr.push(arr[i]);
            newArr = [...newArr];
            newArr.splice(0,1); //2,5,3,6  -> 5,3,6
            console.log(newArr);
            console.log("outputArr");
            console.log(outputArr);
        }
        else { //sum >k
            console.log("else")
            sum -= newArr[0];
            newArr = [...newArr];
            newArr.splice(0,1); //2,5,3,6  -> 5,3,6
            console.log(newArr);
            // if (sum > k ) {
                //     newArr == [];

                // }
            }
        }
    return outputArr;
}
console.log(findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16))
