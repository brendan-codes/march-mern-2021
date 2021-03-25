/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200
};

const available1 = {
	"organic fat": 990,
	"birds nest": 10,
	"fried flesh": 10,
	spicy: 50,
	"gourmet memes": 42000,
	sugar: 9001,
	spice: 5,
	"everything nice": 1,
};

const available2 = {
	"organic fat": 99,
	"live squid": 1,
	"birds nest": 1,
	"fried flesh": 1,
	spicy: 5,
	"gourmet memes": 4200,
};

const available3 = {
	"organic fat": 990,
	"live squid": 10,
	"birds nest": 10,
	"fried flesh": 10,
	spicy: 50,
	"gourmet memes": 42000,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, ingredients) {
	let max = Infinity;
	const keys = Object.keys(recipe);
	for (const key of keys) {
		if (!ingredients.hasOwnProperty(key) || ingredients[key] < recipe[key])
			return 0;
		const serv = Math.floor(ingredients[key] / recipe[key]);
		if (serv < max) max = serv;
	}
	return max;
}
console.log(getMaxServings(recipe, available1));
console.log(getMaxServings(recipe, available2));
console.log(getMaxServings(recipe, available3));

function getMaxServings2(r, a) {
	return Object.keys(r).reduce((m, k) => {
		if (!a.hasOwnProperty(k)) return 0;
		const x = Math.floor(a[k] / r[k]);
		return x < m ? x : m;
	}, Infinity);
}
console.log(getMaxServings2(recipe1, available1));
console.log(getMaxServings2(recipe1, available2));
console.log(getMaxServings2(recipe1, available3));