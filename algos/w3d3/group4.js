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


//Do a for loop through the ailments,and have a second nested for loop through the meds,checking each ailment
//to see if an ailment is in the treatableSymptoms.If it is, we push the name of that medication into a new list of objects.
//If the medication is already in the new list of objects, we do plus 1.
// Return name of medication in list of objects that has the highest value.
function webMD(ailments, meds) {

    let cure =[];
    for(let i = 0; i<= ailments.length-1; i++){ //looping through ailments
        console.log('in first for loop')
        for(let j=0; j<=meds.length-1; j++){//looping through list of objects that include medications and treatableSymptoms
            console.log('in second for loop at ' + [j])
            for( let index in meds[j].treatableSymptoms){
                //also though i think .includes is the function we were looking for to loop through that last array
                // ahhhhhhhh i see, well we know now! Ya:D
                //instead of doing the third for loop
                //meds[j].includes
                console.log('in third loop ' + meds[j].treatableSymptoms[index])
                if (ailments[i] == meds[j].treatableSymptoms[index]){
                    console.log("checkling for" + meds[j].names);
                    cure.push(meds[j].name);
                }
            }
        }
    }
    return cure;
}
console.log(webMD(['pain'], medications))

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