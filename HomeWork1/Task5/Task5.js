let length = prompt('Введите расстояние между городами');
let time = prompt('Введите врем, за которе Вы хотите добраться');
let speed= Math.ceil(length/time);
alert(`Вам потребуется двигаться со скоростью ${speed} км/ч`);