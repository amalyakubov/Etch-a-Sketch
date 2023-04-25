const container = document.getElementById('container');
function createGrid() {
    for (let  i = 0; i < 256; i++) {
        let divs = document.createElement('div');
        divs.classList.add('pixel');
        container.appendChild(divs);
    }
}

createGrid();
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;

let pixels = document.querySelectorAll('pixel');

Array.from(document.getElementsByClassName('pixel')).forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'red';
    })
})