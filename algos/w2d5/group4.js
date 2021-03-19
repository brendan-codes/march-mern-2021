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

const Balloons = (text, word = "balloon") =>                                                                                                                                                                                                                            {
    let charCountTxt = {}                                                                                                                                                                                                                                               ;
    for(let x of text)                                                                                                                                                                                                                                                  {
        if(charCountTxt.hasOwnProperty(x))                                                                                                                                                                                                                              {
            charCountTxt[x]++                                                                                                                                                                                                                                           ;}
        else                                                                                                                                                                                                                                                            {
            charCountTxt[x]=1                                                                                                                                                                                                                                           ;}}
    let count=0                                                                                                                                                                                                                                                         ;
    for (let i=0; true; i++)                                                                                                                                                                                                                                            {
        let idx=i%word.length                                                                                                                                                                                                                                           ;
        if(charCountTxt[word[idx]]>0)                                                                                                                                                                                                                                   {
            charCountTxt[word[idx]]--                                                                                                                                                                                                                                   ;}
        else                                                                                                                                                                                                                                                            {
            break                                                                                                                                                                                                                                                       ;}
        if(idx===word.length-1)count++                                                                                                                                                                                                                                  ;}
    return count                                                                                                                                                                                                                                                        ;
                                                                                                                                                                                                                                                                        };



console.log(Balloons("loonbalxballpoon", "balloon"));
console.log(Balloons("leetcode", "balloon"));
console.log(Balloons("nlaebolko", "balloon"));
// => 2