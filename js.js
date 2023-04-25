const container = document.getElementById('container');
function createGrid() {
    let size = +prompt('Enter the size');
    if (size < 0 || size > 100) {
        alert('Invalid size.');
        size = 0;
    }
    for (let  i = 0; i < size * size; i++) {
        let divs = document.createElement('div');
        divs.classList.add('pixel');
        container.appendChild(divs);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid();

let pixels = document.querySelectorAll('pixel');

Array.from(document.getElementsByClassName('pixel')).forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'red';
    })
})