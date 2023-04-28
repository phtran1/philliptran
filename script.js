const typingText = document.getElementById("typing-text");
const cursorSpan = document.querySelector(".cursor");
const textToType = "Phillip Tran";
const textArray = ["Hello! My name is", "Phillip Tran"]
let i = 0;
let j = 0;
function typeText() {
    // Types the char at the provided indices
    typingText.innerHTML += textArray[i][j];
    j++;
    cursorSpan.classList.add("typing");

    if (j === textArray[i].length) {
        i++;

        // Indents between the words
        if (i != textArray.length){
            typingText.innerHTML += "<br>";
        } else {
            typingText.innerHTML += "";
        }
        
        j = 0;

        // At the end of the array add back blinking cursor.
        if (i === textArray.length) {
            clearInterval;
            cursorSpan.style.display = "inline-block";
            cursorSpan.classList.remove("typing");
        } 
    }
}

const typingInterval = setInterval(typeText, 175);
