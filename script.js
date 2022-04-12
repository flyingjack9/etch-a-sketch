const grid = document.querySelector("#sketch-panel");
const stylesheet = document.styleSheets[0];

let gridSize = 16;
let gridSquareMeasure;

function test() {
    gridSize = prompt("Please enter a the size of the grid : ");
    gridSquareMeasure = 100 / gridSize;
    console.log(gridSquareMeasure);
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