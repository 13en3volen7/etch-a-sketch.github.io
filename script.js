function initialize(gridSize = 16) {
    const containerDiv = document.querySelector("#container");
    const gridDiv = containerDiv.querySelector(".grid");
    const optionsDiv = containerDiv.querySelector(".options");
    
    function createCellTemplate() {
        const cellDiv = document.createElement("div");
        const cellSize = gridDiv.clientWidth / gridSize;
        cellDiv.style.width = `${cellSize}px`;
        cellDiv.style.height = `${cellSize}px`;
        return cellDiv;
    }

    function makeGrid() {
        const cellDiv = createCellTemplate();
        const cells = [];
        for (let row = 1; row <= gridSize; row++) {
            for (let column = 1; column <= gridSize; column++) {
                const cellDivClone = cellDiv.cloneNode();
                cellDivClone.classList.add("cell", `r${row}`, `c${column}`);
                cells.push(cellDivClone);
            }
        }
        gridDiv.replaceChildren(...cells);
    }

    makeGrid();
    gridDiv.addEventListener("mouseover", handleMouseOver);
    optionsDiv.addEventListener("click", handleMouseClick);
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomRGBValue() {
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(getRandomIntInclusive(0, 255));
    }
    return result;
}

function handleMouseOver(event) {
    const target = event.target;
    if (!target.classList.contains("cell")) {
        return;
    }
    const [r, g, b] = getRandomRGBValue();
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function handleMouseClick(event) {
    const target = event.target;
    switch (target.className) {
        case "resize":
            const newSize = +prompt("Enter new grid size: ");
            if (isNaN(newSize)) {
                alert("Please enter a valid number");
            } else if (newSize <= 0) {
                alert("Grid size must be greater than 0")
            } else if (newSize > 100) {
                alert("Grid size must be lesser or equal than 100");
            } else {
                initialize(newSize);
            }
            return;
    }
}

initialize();