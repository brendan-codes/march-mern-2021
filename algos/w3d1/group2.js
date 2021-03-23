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



//loop through the array of objects using .filter targeting
//thefirstName and age.
function findObjectsFilter(search, items) {
        // return items.filter(item => item.firstName == search.firstName && item.age == search.age
    //);
    const keys = Object.keys(search);
    return items.filter((item) => {
		for (let i = 0; i<keys.length; i++) {
			if (item[keys[i]] != search[keys[i]]) return false;
		}
		return true;
	});
}

console.log(findObjectsFilter(searchFor, items));
