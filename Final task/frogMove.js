export function moveFrog(e){
    var frog = document.getElementById("frog");
// получаем стиль для blueRect
var cs = window.getComputedStyle(frog);
var left = parseInt(cs.marginLeft);
var top = parseInt(cs.marginTop);
 
switch(e.keyCode){         
    case 37:  // если нажата клавиша влево
        if(left>0)
        frog.style.marginLeft = left - 20 + "px";
        break;
    case 38:   // если нажата клавиша вверх
        if(top>0)
        frog.style.marginTop = top - 20 + "px";
        break;
    case 39:   // если нажата клавиша вправо
        if(left < document.documentElement.clientWidth - 100)
        frog.style.marginLeft = left + 20 + "px";
        break;
    case 40:   // если нажата клавиша вниз
        if(top < document.documentElement.clientHeight - 100)
        frog.style.marginTop = top + 20 + "px";
        break;
}
} 
addEventListener("keydown", moveFrog);