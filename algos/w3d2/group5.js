// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const students = [{
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null

function findByIdAndUpdate(id, updateObject, arr) {
    for (let i=0; i<arr.length; i++) {
        if (id == arr[i].id) {
            // console.log(arr[i]);
            keysToUpdate = Object.keys(updateObject);
            // console.log(keysToUpdate);
            for (let j=0; j<keysToUpdate.length; j++) {
                if (arr[i].hasOwnProperty(keysToUpdate[j])) {
                    arr[i][keysToUpdate[j]] = updateObject[keysToUpdate[j]];
                }
            }
            return arr[i];
        }
    }
    return null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));   // this works

console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students))    // this is creating that randomKey in the object, which it shouldn't

console.log(findByIdAndUpdate(5, {}, students));    // this works

const findByIdAndUpdate = (id, updateObject, arr) => {
	for (const element of arr) {
		if (element.id != id) continue;
    	for (const key in updateObject)
    		if (element.hasOwnProperty(key)) element[key] = updateObject[key];
        return element;
	}
	return null;
};
