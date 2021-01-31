const palindromeResult = document.querySelector("#palindrome-result");

function isPalindrome(str) {
  const newStr = str.replace(/[^A-Za-z0-9]/g, "");
  console.log(newStr.toLowerCase());
  return (
    newStr.toLowerCase().split("").reverse().join("") === newStr.toLowerCase()
  );
}

function checkPalindrome(event) {
  palindromeResult.textContent = "Checking...";
  setTimeout(() => {
    if (isPalindrome(event.srcElement[0].value)) {
      palindromeResult.textContent = "This is a palindrome.";
    } else {
      palindromeResult.textContent = "Not a palindrome!";
    }
  }, 500);
}

document
  .querySelector("#palindrome-form")
  .addEventListener("submit", checkPalindrome, false);
