const container = document.querySelector(".container");
const blackBtn = document.createElement('button');
const colorBtn = document.createElement('button');
const eraserBtn = document.createElement('button');
const sizeBtn = document.createElement('button');
const btnContainer = document.querySelector(".buttons");

function gridSize (col, rows) {
    for (i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    };
};

gridSize(16,16);

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

function blackColor() {
    const boxes = document.querySelectorAll(".box");
    blackBtn.textContent = 'black';
    blackBtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'Black';
        }))
    })
    btnContainer.appendChild(blackBtn).classList.add('btn');
} 
blackColor();

function eraser() {
    const boxes = document.querySelectorAll(".box");
    eraserBtn.textContent = 'Eraser';
    eraserBtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
        }))
    })
    btnContainer.appendChild(eraserBtn).classList.add('btn');
} 
eraser();

function reSet() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.remove())
}

function reSize() {
    sizeBtn.textContent = "size"
    sizeBtn.addEventListener('click', () => {
        let user = prompt('Enter Size');
        if (user === null || user < 1) {
            reSet();
            gridSize(16,16);
            rdmColor();
            blackColor();
            eraser();
        } else {
            reSet();
            gridSize(user,user);
            rdmColor();
            blackColor();
            eraser();
        }
    })
    btnContainer.appendChild(sizeBtn).classList.add('btn');
}
reSize();

