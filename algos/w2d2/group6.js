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
	if (arr.length == 0) return [];
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > k) continue;
		let temp = [];
		let sum = arr[i];
		temp.push(arr[i]);
		let j = i;
		while (j < arr.length && (sum + arr[j + 1]) <= k) {
			j++;
			sum += arr[j];
			temp.push(arr[j]);
			if (sum == k) result.push([...temp]);
			// if (sum == k) result.push(temp.filter(() => true));
		}
	}
	return result;
}
console.log(findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));


// this code is using a sum helper right now, but can be upgraded to use a rolling sum between the two pointers
function findConsqSums(arr, k) {
    let sol=[]
    let lptr=0;
    let rptr=0;
    while(sum(arr,lptr,rptr)<k){
        rptr++;
    }
    while (lptr<arr.length){
        let s=sum(arr,lptr,((rptr<arr.length)?rptr:arr.length-1))
        if(s==k){
            sol.push(arr.slice(lptr, rptr+1))
            rptr++;
            while(arr[rptr]===0){
                sol.push(arr.slice(lptr, rptr+1))
                rptr++;
                console.log("inner",sum(arr,lptr,rptr))
            }
        }
        else if(s>k){
            lptr++;
        }
        else if(s<k){
            if(rptr<arr.length){
                rptr++;
            }
            else{
                break;
            }
        }
        console.log("outer",sum(arr,lptr,rptr))
    }
    return sol;
}
function sum(arr,lptr, rptr){
    let x=0;
    for(let i=lptr; i<=rptr; i++){
        x+=arr[i]
    }
    console.log("sum",x)
    return x
}
let arr1 = [2, 5, 3, 6, 7, 0, 0, 23, 11]
let k = 16
console.log(findConsqSums(arr1, k))