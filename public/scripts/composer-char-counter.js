/* eslint-env jquery */
/* eslint-env browser */
let charCount = 140;
const textArea = document.getElementById('tweet-text');
const remainingChars = document.getElementById("remainChar");

$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    console.log(this);
  
    let remainCount = charCount - this.value.length;

    remainingChars.textContent = `${remainCount}`;

    if (remainCount < 0) {
      remainingChars.classList.add("red-font");
      remainingChars.classList.remove("black-font");
    } else {
      remainingChars.classList.add("black-font");
      remainingChars.classList.remove("red-font");
    }
  });
  textArea.addEventListener("input", () => {
    // console.log(element)
    
  });

});