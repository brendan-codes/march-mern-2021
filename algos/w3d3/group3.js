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
    // let sympTracker = {med1 :2, med2: 3, med3:4};
    // let sympTracker = {1 : [med1, med2], 2 : [med3]};
    let sympTracker = {};
    let desiredMeds = [];
    for (const med of meds){
        for (let i=0; i < ailments.length; i++){
            for (let j=0; j < med["treatableSymptoms"].length; j++){
            if (ailments[i] == med["treatableSymptoms"][j]){
                // {med1 :1}
                if (!med["name"] in sympTracker){
                sympTracker[med["name"]] = 1;
                console.log(sympTracker[med["name"]]);
                } else{
                sympTracker[med["name"]] += 1;
                console.log("hi");
                }
            }
            }
        }
    }
    return sympTracker;
}

console.log(webMD(["pain"], medications));
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