let num = prompt('Введите количество валюты для конвертации');
const usd = 26.69;
const eur= 29.95;
const coef = usd/eur;
let sum= Math.floor(num*coef*100)/100;
alert(`Вы получите ${sum} eur`);
alert(`hello');

