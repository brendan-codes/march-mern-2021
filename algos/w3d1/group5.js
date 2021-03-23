// findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];
//create a for loop that iterates through the array and filter by name and age.
function findObjectsFilter(search, items) {

    let result = [];
    let validator = false;
    for (let i = 0; i < items.length; i++) {
        for (key in searchFor) {
            if (items[i][key] === searchFor[key]) {
                validator = true;
            }
            else {
                validator = false;
                break;
            }
        }
        if (validator === true) {
            result.push(items[i]);
        }
        validator = false;
    }
    return result;
}

const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

console.log(findObjectsFilter(searchFor, items));

