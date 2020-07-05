let num = prompt('Введите радиус');
if(num<=0){
alert(`Радиус окружности не может быть меньше 0`)}
else{
let sqr=Math.floor(num*num*Math.PI*100)/100;
alert(`Площадь круга ${sqr} см`);}