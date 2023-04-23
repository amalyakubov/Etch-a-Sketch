const container = document.getElementById('container');
function createGrid() {
    for (let  i = 0; i < 256; i++) {
        let divs = document.createElement('div');
        container.appendChild(divs);
    }
}

createGrid();