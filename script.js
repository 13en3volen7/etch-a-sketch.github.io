function initialize(gridSize = 16) {
    const containerDiv = document.querySelector("#container");

    function createSquareTemplate() {
        const squareDiv = document.createElement("div");
        const squareSize = containerDiv.clientWidth / gridSize;
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        return squareDiv;
    }

    function makeGrid() {
        const squareDiv = createSquareTemplate();
        for (let row = 1; row <= gridSize; row++) {
            for (let column = 1; column <= gridSize; column++) {
                const squareDivClone = squareDiv.cloneNode();
                squareDivClone.classList.add("square", `r${row}`, `c${column}`);
                containerDiv.appendChild(squareDivClone);
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
    if (!target.classList.contains("square")) {
        return;
    }
    const [r, g, b] = getRandomRGBValue();
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

initialize();