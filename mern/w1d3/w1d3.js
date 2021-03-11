var x = function(){
    return 10;
}

var y = () => 10;


function z(){
    return 10;
}


var a = [() => {}, () => {}];

var func = a[0];


const myMap = function(callback){

};

myMap(() => {});


function doubleNumbers(nums){
    const newNumbers = [];
    for(let i = 0; i < nums.length; i++){
        newNumbers.push(nums[i] * 2);
    }

    return newNumbers;
}

function tripleNumbers(nums){
    const newNumbers = [];
    for(let i = 0; i < nums.length; i++){
        newNumbers.push(nums[i] * 3);
    }

    return newNumbers;
}

function multiplyNumbers(nums, by){
    const newNumbers = [];
    for(let i = 0; i < nums.length; i++){
        newNumbers.push(nums[i] * by);
    }

    return newNumbers;
}

console.log(doubleNumbers([2,3,7,99]));

var numbers = [56, 78, 90, 45, 67, 89, 87, 65, 88];
console.log(numbers.map(number => number * 3))
console.log(numbers.map(function(number){ return number * 3 }));

console.log(numbers.map(number => number + 1))
console.log(numbers.map(number => number * number))

const myNewMap = (arr, callback) => {
    callback("hello?");
    for(let i = 0; i < arr.length; i++){
        // console.log(this[i]);
        callback(arr[i]);
    }
}

myNewMap(numbers, function(data){ console.log(data) });


console.log(numbers.filter(number => number === 88));

// numbers.forEach
// numbers.sort
// numbers.reduce
// numbers.

// have an array
// want a modifed new array
// of the same length

