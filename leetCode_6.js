function longestPalindrome(s) {
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    
    return s.slice(left + 1, right);
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    
    const palindrome1 = expandAroundCenter(i, i);
   
    const palindrome2 = expandAroundCenter(i, i + 1);
   
    longest = [longest, palindrome1, palindrome2].reduce((a, b) =>
      a.length > b.length ? a : b
    );
  }

  return longest;
}