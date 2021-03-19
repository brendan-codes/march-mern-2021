/* *1189. Maximum Number of Balloons
 * Given a string text you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */

const Balloons = (text, word = "balloon") => {
	//loop through input word and count the letters into a separate dictionary keyed on the letters
	const wordLetterCount = {};
	for(let i = 0; i < word.length; i++) {
		if (wordLetterCount.hasOwnProperty(word[i]))
			wordLetterCount[word[i]] += 1;
		else
			wordLetterCount[word[i]] = 1;
	}
	//loop through the input text and count the letters (from the input word) when they appear in the text
	const textLetterCount = {};
	for(let i =0; i < text.length; i++) {
		if(wordLetterCount.hasOwnProperty(text[i])) {
			if(textLetterCount.hasOwnProperty([text[i]]))
				textLetterCount[text[i]] += 1;
			else
				textLetterCount[text[i]] = 1;
		}
	}
	//examine the letter counts to see how many times you can make the word
	let wordCount = Infinity;
	for (const key in textLetterCount) {
		const x = Math.floor(textLetterCount[key] / wordLetterCount[key]);
		if(x < wordCount) wordCount = x;
	}
    return wordCount;
};


console.log(Balloons("loonbalxballpoon", "balloon"));
console.log(Balloons("nlaebolko", "balloon"));
console.log(Balloons("leetcode", "balloon"));
// => 2