const container = document.querySelector('#container');

//Creates a number(i) of div elements 
//inside of the parent container
function createDivs() {
    for (i=0;i<16;i++) {
        const divi = document.createElement('div');
        container.appendChild(divi);
        divi.setAttribute('id', "d" + i); 
        divi.style.cssText = "background-color: black";
    }
}

createDivs();

//Creates a grid in the container element
container.style.display = 'grid';
container.style.gridTemplateRows= "100px 100px 100px 100px";
container.style.gridTemplateColumns= "100px 100px 100px 100px";

//Changes the color of one div when you hover over it
let divw = document.querySelector('#d1');

divw.addEventListener('mouseover', function(){
    divw.style.cssText = "background-color: blue";
  })

divw.addEventListener('mouseout', function(){
    divw.style.cssText = "background-color: pink";
  })











