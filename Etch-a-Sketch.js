const container = document.querySelector('#container');

function createDivs() {
    for (i=0;i<16;i++) {
        const divi = document.createElement('div');
        container.appendChild(divi);
        divi.setAttribute('id', i); 
        divi.style.cssText = "background-color: black";
    }
}

createDivs();

container.style.display = 'grid';
container.style.gridTemplateRows= "100px 100px 100px 100px";
container.style.gridTemplateColumns= "100px 100px 100px 100px";






