

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// MON
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};


const ourItems = [
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

function findObjectsFilter(search, items) {
    returnArray = [];
    let searchKeys = Object.keys(search);
    // take items and look through our search to see which key value pairs match
    for (i=0; i<items.length; i++){
        for (j=0; j<searchKeys.length; j++){
            if (items[i].searchKeys[j] == search.searchKeys[j]){
                returnArray.push(items[i])
            }
        }
    }
    // push each object that matches to our returnArray
    return returnArray;
}

console.log(findObjectsFilter(searchFor, ourItems));