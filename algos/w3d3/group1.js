/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

function webMD(ailments, meds) {

}


function webMD(ailments, meds) {
    let arres=[]                                                                                                                //declare an array to hold the results
    for(let med of meds){                                                                                                       //for each med
        let sympstreated=med.treatableSymptoms.filter(treats => ailments.includes(treats)).length                               //get the number of ailments matched
        if(arres[sympstreated]===undefined)                                                                                     //if no other med has the same amount of ailments matched
            arres[sympstreated]=[med.name]                                                                                      //add an array with the medicine in it at that index
        else                                                                                                                    //otherwise
            arres[sympstreated].push(med.name)                                                                                  //add the medicine to the array at that index
    }
    return arres.length < 2 ? [] : arres.pop();                                                                                 //if length of arr.length is 0, we didn't get meds. if 1, it means none of the medicines match. for anything else, just get the array in the last index of arres to get the medicine(s) with the most matching values
}

console.log(webMD(["pain"],medications))
console.log(webMD(["pain", "inflammation", "depression"],medications))
console.log(webMD(["existential dread"],medications))
console.log(webMD(["pain", "existential dread"],medications))
console.log(webMD(["pain",undefined,undefined, "existential dread"],medications))

function webMD(ailments, meds) {
    var min = 0;
    var workingPills = [];
    for (const med of meds) {
        let tempMin = 0;
        for (ailment of ailments) {
            if (med.treatableSymptoms.includes(ailment)) {
                tempMin++;
            }
        }
        if (tempMin == min && tempMin!= 0) {
            workingPills.push(med.name);
        }
        else if (tempMin > min) {
            workingPills = [];
            min = tempMin;
            workingPills.push(med.name);
        }
    }
    return workingPills;
}

webMD(["pain"], medications);

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/