'use strict'

let currentLength = 100;

let tiles = [];;
for (let i = 0; i < currentLength; i++) {
  let tile = document.createElement('div');

  tile.className = 'tile';
  tiles.push(tile)
}

document.querySelector('.container').append(...tiles);
const endMenu = document.querySelector('.endMenu')

function bred(){

let colorTime = setInterval(() => {
  const randomColor =`rgb(${~~(Math.random() * 256)},${~~(Math.random() * 256)},${~~(Math.random() * 256)}`
  const randomIndex = ~~(Math.random() * currentLength);
  const tile = tiles[randomIndex];

  tile.style.backgroundColor = randomColor;
  
  if (currentLength - 1 > 0) {
    tiles = [...tiles].filter((elem) => elem !== tile);
    currentLength--;
  } 
}, 100);
setTimeout(() => { clearInterval(colorTime); }, 10099);
}
bred();

/*function random(number) {
    return Math.floor(Math.random() * number);
  }

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
  }*/
var divs = document.querySelectorAll('.tile');

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = '';
    console.log(divs.length);
   
      }
}