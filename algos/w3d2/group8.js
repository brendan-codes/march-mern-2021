//*********************************************************************************************** */

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

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

  function findAndUpdate(id, obj, arr) {
    let itemFound = false; let i = 0; let editsPerformed = false;
    while(itemFound == false && i < arr.length) {
      if(arr[i].id == id) {var toEdit = arr[i]; itemFound = true; break}
      i++;
    }
    if(itemFound == false) {return 'Invalid ID'}
    Object.keys(obj).map((key) => {
      if(toEdit.hasOwnProperty(key)) {
        editsPerformed = true;
        toEdit[key] = obj[key];
      }
    });
    return editsPerformed ? toEdit : null;
  }

  console.log(findAndUpdate(1, {hobbies: 'John'}, students));

  function findByIdAndUpdate(id, updateObject, arr) {
    const updateItems = Object.keys(updateObject);
    for (const student of arr) {
        if (student.id === id) {
            for (const updateItem of updateItems) {
                if(student.hasOwnProperty(updateItem)) {
                    student[updateItem] = updateObject[updateItem];
                }
            }
            return student;
        }
    }
    return null;
}


//manny:

function findByIdAndUpdate(id, updateObject, arr) {

  arr.forEach(element => {

      if(element.id !== id){
          return null;
      }

      else if(element.id == id){
          Object.assign(element,updateObject);
      }
  });

  return arr;
};

console.log(findByIdAndUpdate(5, {}, students));