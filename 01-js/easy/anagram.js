/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // IMPORTANT we are calculating whether str1 and str2's length is equal and not cleanStr1 and cleanStr2
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters of both cleaned strings and compare them
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // If the sorted cleaned strings are equal, they are anagrams
return sortedStr1 === sortedStr2
}

module.exports = isAnagram;