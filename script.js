
function defaultView () {
    const container = document.querySelector(".container");
    for (i = 0; i < 16; i++) {
        container.innerHTML += '<div class="box"></div>';
    };
};

defaultView();

let changeColor = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            // div.classList.add("color-change")
            console.log('hello');
        });
    });
};
