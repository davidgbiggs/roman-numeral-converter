const form = document.querySelector("#palindrome-form");
const input = document.querySelector("#palindrome-input");
const palindromeResult = document.querySelector("#palindrome-result");

form.addEventListener("submit", checkPalindrome, false);
input.addEventListener("focus", setFocusDirections, false);
input.addEventListener("blur", setBlurDirections, false);

// function executed for its side effects
function checkPalindrome(event) {
  const inputValue = event.srcElement[0].value;
  palindromeResult.textContent = "Checking...";

  setTimeout(() => {
    if (inputValue.length === 0) {
      palindromeResult.textContent = "You should probably type something.";
    } else if (isPalindrome(inputValue)) {
      palindromeResult.textContent = "This is a palindrome.";
    } else {
      palindromeResult.textContent = "Not a palindrome!";
    }
  }, 200);

  // pure function, determines if something is a palindrome
  function isPalindrome(str) {
    // this regex is necessary because of the way the project is structured @ Free Code Camp
    const newStr = str.replace(/[^A-Za-z0-9]/g, "");
    return (
      newStr.toLowerCase().split("").reverse().join("") === newStr.toLowerCase()
    );
  }
}

function setFocusDirections() {
  palindromeResult.textContent = "Press enter to evaluate.";
}

function setBlurDirections() {
  palindromeResult.textContent = "Press tab.";
}
