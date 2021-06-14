const colors = document.querySelectorAll('.color');
const palette = document.querySelector('#color-palette');


// add selected and remove selected
palette.addEventListener('click', function (event){
  if(event.target.classList.contains('color')){
    colors.forEach(function(_, index){
      colors[index].classList.remove("selected");
    })
    event.target.classList.add("selected");
  }
})
// fazer o link entre o selected e a cor escolhida
const pixelColor = document.querySelectorAll(".pixel");

function print(){
  for (let index = 0; index < colors.length; index += 1) {
    if(colors[index].classList.contains('selected')){
    let getPalette = colors[index];
    let backGround = window.getComputedStyle(getPalette, null).getPropertyValue("background-color");
    return backGround;
  }
  }
}

function printB(event){
  event.target.style.backgroundColor = print()
}

function printC(){
  for(let index = 0; index < pixelColor.length; index += 1){
    pixelColor[index].addEventListener('click', printB)
  }
}
printC();