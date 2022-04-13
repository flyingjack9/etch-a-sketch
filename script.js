// Variables and constants
const resetBtn = document.getElementById("reset");
const eraserBtn = document.getElementById("eraser");
const blackBtn = document.getElementById("black");
const rainbowBtn = document.getElementById("rainbow");
const randomBtn = document.getElementById("random");
const changeSizeBtn = document.getElementById("changeSize");

const grid = document.getElementById("sketch-panel");
const stylesheet = document.styleSheets[0];

let gridSize = 16;
let gridSquareMeasure;
let currentPenColor = "black";
let randomColor;

// Events listeners
grid.addEventListener("mouseover", function(event) {
    switch (currentPenColor) {
        case "eraser":
            event.target.style.backgroundColor = "greenyellow";
            break;

        case "black":
            event.target.style.backgroundColor = "black";
            break;

        case "rainbow":
            event.target.style.backgroundColor = generateRandomRGB();
            break;
            
        case "random":
            event.target.style.backgroundColor = randomColor;
            break;   
    }
})

resetBtn.addEventListener("click", resetGrid);

eraserBtn.addEventListener("click", () => {
    currentPenColor = "eraser";
});

blackBtn.addEventListener("click", () => {
    currentPenColor = "black";
});

rainbowBtn.addEventListener("click", () => {
    currentPenColor = "rainbow";
});

randomBtn.addEventListener("click", () => {
    randomColor = generateRandomRGB();
    currentPenColor = "random";
});

changeSizeBtn.addEventListener("click", () => {
    location.reload();
})

// Functions
function initiateSketchBoard() {
    getGridSize();
    calculateGridRatio();
    stylesheet.insertRule(`.grid-square { width: ${gridSquareMeasure}%; padding-bottom: ${gridSquareMeasure}%;`);
    createGrid();
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            row.appendChild(gridSquare);
        }
        grid.appendChild(row);

    }
}

function getGridSize() {
    gridSize = prompt("Please enter a number between 1 - 100 for the size of the grid : ");
    if (gridSize <= 0 || gridSize > 100) {
        alert("Invalid entry, please try again!");
        getGridSize();
    }
}

function calculateGridRatio() {
    gridSquareMeasure = 100 / gridSize;
}

function generateRandomRGB() {
    let letters = "0123456789ABCDEF".split("");
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.round(Math.random() * 15)];
    }
    return randomColor;
}

function resetGrid() {
    let gridSquares = document.getElementsByClassName("grid-square");
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "greenyellow";
    }
}