let value = prompt('Введите объем флешки (в гб)');
let convert = value*1024;
const size = 820;
let num= Math.floor(convert/size);
alert(`Вы сможете записать ${num} файлов`);