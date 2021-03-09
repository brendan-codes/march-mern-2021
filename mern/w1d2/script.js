var x = ["apples", "pears", "grapes"];

// var a = x[0];
// var b = x[1];
// var c = x[2];

var [a, b, c] = x;

console.log(a, b, c);


var person = {
    name: "brendan",
    email: "brendan@email.com",
    favorite_language: "js!",
    address: {
        city: "fake",
        zip: "99999",
        state: "CA",
        street: "123 Fake Street"
    }
}

var { address: { city: city} } = person;

console.log(city);

var y = [34, 56, 78, 98, 76, 54, 34, 56, 7];
var z = [1, 2, 3];
var arr = [...z, ...y];

var oneMore = [1, ...y];

console.log(arr);

var n = "Brendan";

n[0] = "X";
console.log(n[0]);

console.log(n);


function doStuff(){} // <- standalone function
var doStuff = function(){} // <--  anonymous function stored in a variable
var obj = {
    doStuff: function(){ // <--- method

    }
}
const doThings = () => {} // <-- fat arrow function

const implicitReturn = () => 10;

const explicitReturn = () => {
    return 10;
};

