const container = document.getElementById('#container');
function createGrid() {
    for (let  i = 0; i < 196; i++) {
        let divs = document.createElement('div');
        document.body.appendChild(divs);
    }
}
createGrid();