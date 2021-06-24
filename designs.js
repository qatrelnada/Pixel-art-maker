// Select color input
const clr = document.getElementById('colorPicker');

const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const inputSubmit = document.getElementById('inputSubmit');

inputSubmit.addEventListener('click', function makeGrid(event) {
event.preventDefault();

table.innerHTML = "";
const docFrag = document.createDocumentFragment();
// Select size input
const inputHeight = document.getElementById('inputHeight').value;
const inputWidth = document.getElementById('inputWidth').value;

for(let i=0; i<inputHeight; i++){
const tableRow = document.createElement('tr');

for(let k=0; k<inputWidth; k++){
const tableData = document.createElement('td');
tableRow.appendChild(tableData);
}
docFrag.appendChild(tableRow);
}

table.appendChild(docFrag);
const cells = document.getElementsByTagName('td');

for(let x=0; x<cells.length; x++){
    cells[x].addEventListener('click', function(event) {
        const current = event.target;
        current.style.backgroundColor = clr.value;
})    
}
});