const textArea = document.querySelector("#textbox");
const count = document.querySelector("#count");
let maxChars = 280;

count.innerText = maxChars;

const countText = (e) => {
  let numOfChars = e.target.value.length;
  let charsRemaining = maxChars - numOfChars;
  count.innerText = charsRemaining;

  if (charsRemaining < 0) {
    count.style.color = "red";
    textArea.style.outline = "2px solid red";
  } else {
    count.style.color = "unset";
    textArea.style.outline = "2px solid green";
  }
};

textArea.addEventListener("input", countText);
