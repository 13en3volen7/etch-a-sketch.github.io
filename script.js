function initialize(gridSize = 16) {
    const containerDiv = document.querySelector("#container");

    function createCellTemplate() {
        const cellDiv = document.createElement("div");
        const cellSize = containerDiv.clientWidth / gridSize;
        cellDiv.style.width = `${cellSize}px`;
        cellDiv.style.height = `${cellSize}px`;
        return cellDiv;
    }

    function makeGrid() {
        const cellDiv = createCellTemplate();
        for (let row = 1; row <= gridSize; row++) {
            for (let column = 1; column <= gridSize; column++) {
                const cellDivClone = cellDiv.cloneNode();
                cellDivClone.classList.add("cell", `r${row}`, `c${column}`);
                containerDiv.appendChild(cellDivClone);
            }
        }
    }

    makeGrid();
    containerDiv.addEventListener("mouseover", handleMouseOver);
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

initialize();