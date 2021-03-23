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

function findObjectsFilter(search, items) {
    const keys = Object.keys(search);
    let output = [];

    for(var i=0; i<items.length; i++){
        let match = true;
        for(var j=0; j<keys.length; j++){
            if( (!keys[j] in items[i]) || (items[i][keys[j]] != search[keys[j]]) ){
                console.log("doesn't match");
                match = false;
                break;
            }
        }
        if(match){
            output.push(items[i]);
        }
    }
    return output;
}

//use .filter() here instead
function findObjectsFilter(search, items) {
    const keys = Object.keys(search);
    return items.filter((item) => {
        for(var j=0; j<keys.length; j++){
            if( (!keys[j] in item) || (item[keys[j]] != search[keys[j]]) ){
            console.log("doesn't match");
            return false;
            }
        }
        return true;
        })
}