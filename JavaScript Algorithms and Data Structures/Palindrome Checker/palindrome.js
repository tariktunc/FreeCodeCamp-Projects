function palindrome(str) {
  let reverse = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let strReverse = reverse.split("").reverse().join("");

  if (reverse === strReverse) {
    return true;
  }
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
