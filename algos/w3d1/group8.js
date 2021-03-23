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
// function to filter through our list for our searchFor
function findObjectsFilter(search, items) {
    //filter takes in the attributes and calls upon the attrMatch function
    return items.filter((x)=>attrMatch(search,x))
//                               true/false
}

//function to check if an object's attributes matches against all attributes of a search object.
//returns true if all attributes of the search object are matched
//otherwise returns false
function attrMatch(searchKey,Itm) {
    for(let x in searchKey)//loop through each attribute of the search object
        if(searchKey[x]!==Itm[x])// and compare them to the matching attr in the item
            return false// if even a single attribute doesn't match return false
    return true//if we reach this point after the for-in loop, we know all attributes match, so return true
}

console.log(findObjectsFilter(searchFor,items))
//wrote answer as two seperate functions for reusability. A function to match an object against a search
//object may come in handy later in another part of the program