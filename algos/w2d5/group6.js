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
	if (text.length < word.length) return 0;
	//loop through input word and count the letters into a separate dictionary keyed on the letters
	const wordLetterCounts = {};
	for (let i = 0; i < word.length; i++) {
		wordLetterCounts.hasOwnProperty(word[i])
			? wordLetterCounts[word[i]]++
			: (wordLetterCounts[word[i]] = 1);
	}
	//loop through the input text and count the letters (from the input word) when they appear in the text
	const textLetterCounts = {};
	for (let i = 0; i < text.length; i++) {
		if (wordLetterCounts.hasOwnProperty(text[i])) {
			textLetterCounts.hasOwnProperty([text[i]])
				? textLetterCounts[text[i]]++
				: (textLetterCounts[text[i]] = 1);
		}
	}
	//examine the letter counts to see how many times you can make the word
	let wordCount = Infinity;
	for (const key in textLetterCounts) {
		const temp = Math.floor(textLetterCounts[key] / wordLetterCounts[key]);
		if (temp < wordCount) wordCount = temp;
	}
	return wordCount;
};


console.log(Balloons("nlaebolko", "balloon"));
// => 1
console.log(Balloons("loonbalxballpoon", "balloon"));
// => 2
console.log(Balloons("leetcode", "balloon"));
// => 0