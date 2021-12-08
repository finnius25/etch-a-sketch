const container = document.querySelector(".container");
const blackBtn = document.createElement('button');
const colorBtn = document.createElement('button');
const eraserBtn = document.createElement('button');
const sizeBtn = document.createElement('button');
const btnContainer = document.querySelector(".buttons");

function gridSize (col, rows) {
    for (i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.appendChild(div).classList.add('box')
    };
};



gridSize(4,4);

function rdmColor() {
    const boxes = document.querySelectorAll(".box");
    colorBtn.textContent = 'Color';
    colorBtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            box.style.background = `rgb(${r},${g},${b})`
        }))
    })
    btnContainer.appendChild(colorBtn).classList.add('btn');
}
rdmColor();
