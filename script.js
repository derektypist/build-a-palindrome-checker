// Set Up Constants

const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Set Up Event Listener

checkBtn.addEventListener("click", () => {
  const originalInput = userInput.value;

  // Check the length of the original input
  if (originalInput.length === 0) {
    alert(`Please input a value`);
  } else {
    result.innerHTML = ``;
    const resultMsg = `${originalInput} ${isPalindrome(originalInput) ? "is a palindrome" : "is not a palindrome"}.`;
    result.innerHTML = resultMsg;
  }
});


// Function to check if the string is a palindrome
function isPalindrome(str) {

  /* Convert the string to an array, remove all non-alphanumeric characters, convert back to string and turn everything into lower case

  */
  
  const lowerCaseStr = [...str].filter((c) => (c.charCodeAt(0) >=48 && c.charCodeAt(0) <=57) || (c.charCodeAt(0) >=65 && c.charCodeAt(0) <=90) || (c.charCodeAt(0) >=97 && c.charCodeAt(0) <=122)).join('').toLowerCase();
  return lowerCaseStr === [...lowerCaseStr].reverse().join('');
}
