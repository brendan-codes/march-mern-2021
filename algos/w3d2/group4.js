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
// Group code
// function update(id, updateObject, arr) {
//     for(var i=0; i<=arr.length;i++){
//         if (arr[i] == id){
//             for(let key in updateObject){
//                 if(arr[i].hasOwnProperty(key)){
//                     arr[i][key] == updateObject[key];
//                 }
//             }
//             return arr[i];
//         }
//     }
//     return null
// }
// console.log(update(3, { redBeltStatus: true }, students));


// Brendon's code
function findByIdAndUpdate(id, updatedVals, collection) {
    // separate the keys
    const keys = Object.keys(updatedVals);

    // loop over the collection and look at each document
    for (const item of collection) {
        // match ids
        if (item.id === id) {
            // loop through our keys
            for (const key of keys) {
                // only update keys that exist on the found object
                if (item.hasOwnProperty(key)) {
                    item[key] = updatedVals[key];
                }
            }
            return item;
        }
    }
    // above return didn't run so nothing was found
    return null;
}
console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));

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
