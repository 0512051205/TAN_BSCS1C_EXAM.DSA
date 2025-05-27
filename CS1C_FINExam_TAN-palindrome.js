// Prompt for two words
let word1 = prompt("Enter first word (e.g. RACECAR):");
let word2 = prompt("Enter second word (e.g. RECORDER):");

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Displaying results using alert
alert(`${word1} is palindrome: ${isPalindrome(word1)}`);
alert(`${word2} is palindrome: ${isPalindrome(word2)}`);
