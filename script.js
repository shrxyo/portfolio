const focusAreas = [
    "Frontend Development",
    "Machine Learning",
    "Natural Language Processing",
    "Large Language Models",
    "Game Development"
];

let currentFocusIndex = 0;
const focusTextElement = document.getElementById("focus-area");

function changeFocusText() {
    focusTextElement.textContent = focusAreas[currentFocusIndex];
    currentFocusIndex = (currentFocusIndex + 1) % focusAreas.length; 
}

setInterval(changeFocusText, 1500);


