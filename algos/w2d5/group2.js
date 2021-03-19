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

//create 2 objects:
//first takes in the word itself and store the letters.
//second filter through the word and create new object.
//third take the sum of  each individual letter and divide by the amount duplicate letters.

const Balloons = (text, word = "balloon") => {
    var wordLetters = {};
    var textLetters = {};
    var min;
    for (let i = 0; i < word.length; i++) {
        if (wordLetters.hasOwnProperty(word[i])) {
            wordLetters[word[i]] = wordLetters[word[i]]+1;
        }
        else wordLetters[word[i]] = 1;
    }
    for (let j = 0; j < text.length; j++) {
        if (textLetters.hasOwnProperty(text[j])) {
            textLetters[text[j]] = textLetters[text[j]]+1;
        }
        else textLetters[text[j]] = 1;
    }
    for (let k = 0; k < word.length; k++) {
        let minWords;
        if (textLetters.hasOwnProperty(word[k]) && wordLetters.hasOwnProperty(word[k])) {
            minWords = Math.floor(textLetters[word[k]] / wordLetters[word[k]]);
            if (minWords < min) {
                min = minWords;
            }
        }
        else return 0;
    }
    return min;
};


console.log(Balloons("loonbalxballpoon", "balloon"));
// => 2




// Create object with each letter initalized at 0
// For var i of argument, increment
// Find maximum, can use Math.floor to find, need to find val/2 for l and o (spelling of balloon)

const Ballons = function(text) {
    const map = { b:0, a:0, l:0, o:0, n:0,};
    for (let i of text) {
        obj[i]++;
    }
    return Math.floor(
        obj.b, obj.a, obj.l/2, obj.o/2, obj.n);

};

console.log(ballons("loonbalxballpoon"))
