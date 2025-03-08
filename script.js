document.addEventListener("DOMContentLoaded", function () {
    const typing = document.querySelector(".typing");
    const words = ["a Programmer", "a Tech Enthusiast", "a Problem Solver"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = words[wordIndex];

    function type() {
        if (letterIndex < currentWord.length) {
            typing.textContent += currentWord[letterIndex];
            letterIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typing.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
            setTimeout(type, 500);
        }
    }

    type();
});
