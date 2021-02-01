const form = document.querySelector("#rn-form");
const input = document.querySelector("#rn-input");
const rnResult = document.querySelector("#rn-result");

form.addEventListener("submit", checkRn, false);
input.addEventListener("focus", setFocusDirections, false);
// input.addEventListener("blur", setBlurDirections, false);

// function executed for its side effects
function checkRn(event) {
  const inputValue = parseInt(event.srcElement[0].value, 10);
  rnResult.textContent = "Checking...";
  const res = convertToRoman(inputValue);
  console.log(inputValue.length);

  setTimeout(() => {
    if (!res) {
      rnResult.textContent = "You should probably type something.";
    } else {
      rnResult.textContent = "Conversion: " + res;
    }
  }, 200);

  // pure function, returns roman numeral version of an integer
  function convertToRoman(num) {
    const romArr = [];
    const numeralMap = [
      { numeral: "M", value: 1000 },
      { numeral: "CM", value: 900 },
      { numeral: "D", value: 500 },
      { numeral: "CD", value: 400 },
      { numeral: "C", value: 100 },
      { numeral: "XC", value: 90 },
      { numeral: "L", value: 50 },
      { numeral: "XL", value: 40 },
      { numeral: "X", value: 10 },
      { numeral: "IX", value: 9 },
      { numeral: "V", value: 5 },
      { numeral: "IV", value: 4 },
      { numeral: "I", value: 1 },
    ];

    let i = 0;
    while (i < numeralMap.length) {
      const numObj = numeralMap[i];
      if (num - numObj.value >= 0) {
        romArr.push(numObj.numeral);
        num -= numObj.value;
      } else if (num === 0) {
        break;
      } else {
        i++;
      }
    }

    return romArr.join("");
  }
}

function setFocusDirections() {
  rnResult.textContent = "Press enter to evaluate.";
}

function setBlurDirections() {
  rnResult.textContent = "Press tab.";
}
