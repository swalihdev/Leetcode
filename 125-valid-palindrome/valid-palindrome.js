/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
      s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = s.length - 1;

    for (let i = 0; i < s.length / 2; i++) {

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
    
};