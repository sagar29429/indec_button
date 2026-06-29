// Get elements
let btnIncrease = document.getElementById("btnIncrease");
let btnDecrease = document.getElementById("btnDecrease");
let element = document.getElementById("element");

// Get initial font size
let initialSize = window.getComputedStyle(element).fontSize;
initialSize = parseInt(initialSize);

// Increase font size
btnIncrease.addEventListener("click", function () {
    initialSize += 10;
    element.style.fontSize = initialSize + "px";
});

// Decrease font size
btnDecrease.addEventListener("click", function () {
    initialSize -= 10;

    // Minimum font size
    if (initialSize < 10) {
        initialSize = 10;
    }

    element.style.fontSize = initialSize + "px";
});