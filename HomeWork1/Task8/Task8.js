let value = prompt('Введите сумму денег в наличие');
let price = prompt('Введите цену шоколадки');
const size = 820;
let num= Math.floor(value/price);
let change  = value%price;
alert(`Вы сможете купить ${num} плиток шоколада и у вас останется ${change} грн`);