const container = document.querySelector('#container');

//Creates a number(i) of div elements 
//inside of the parent container
function createDivs(n) {
    for (i=0;i<n;i++) {
        const divi = document.createElement('div');
        container.appendChild(divi);
        divi.setAttribute('id', "d" + i); 
        divi.setAttribute('class', 'changeColor');
        divi.style.cssText = "background-color: black";
    }
}

//Creates a grid in the container element
  container.style.display = 'grid';

function gridRows(n) {
  container.style.gridTemplateRows= `repeat(${n}, 1fr)`;
  container.style.gridTemplateColumns= `repeat(${n}, 1fr)`;
}

gridRows(20);

createDivs(400);


//Changes the color of a div in the grid when you hover over it
const divColor = document.querySelectorAll('div.changeColor');

divColor.forEach(colorDivs);

function colorDivs(div) {
  div.addEventListener('mouseover', function(){
    div.style.cssText = "background-color: blue";
      })
      
  div.addEventListener('mouseout', function(){
    div.style.cssText = "background-color: pink";
      })
}

//changes the color of the divs in the grid back to black
function eraseDivs(div) {
    div.style.cssText = "background-color: black";
}

function erase() {
  divColor.forEach(eraseDivs);
}

const erasebtn = document.querySelector("#erase");
erasebtn.addEventListener('click', function() {erase()});















