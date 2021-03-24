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

// Functional React
// initialize hash table, empty array and a counter
// iterateover ailments with map, filter by medication

function webMD(ailments, meds) {
    const mostMeds = ailments.filter(ailment => meds.includes(ailments));
    return mostMeds.map(med => med.name);
}




//Brute Force

function webMD (ailments, meds) {
    var mostMeds = [];
    var maxCount = 0;
    for (var i = 0; i < meds.length; i++){
        var count = 0;
        for (var j = 0; j < ailments.length; j++) {
            if (meds[i].treatableSymptoms.includes(ailments[j])) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostMeds = [meds[i].name]
        }
        else if (count === maxCount) mostMeds.push(meds[i].name);
    }
    return mostMeds;
}

// initalize array to return and a counter
//iterate throughmeds and ailments
// push into array


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