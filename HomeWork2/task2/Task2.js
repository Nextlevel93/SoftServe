let sand ='Enter the price of the sand type';
let container ='Enter the volume of the container';
let a = +prompt(`${sand} A1`);
let b = +prompt(`${sand} A2`);
let c = +prompt(`${sand} A3`);
let d = +prompt(`${container} В1`);
let e = +prompt(`${container} В2`);
let f = +prompt(`${container} В3`);

let max_price = Math.max(a, b, c);
let max_capacity = Math.max(d, e, f);
let lowest_price = Math.min(a, b, c);
let lowest_capacity = Math.min(d, e, f);
let middle_price = (a + b + c - max_price-lowest_price);
let middle_capacity = (d + e + f - max_capacity - lowest_capacity);
let bingo = (max_price * max_capacity + lowest_price * lowest_capacity + 
             middle_price * middle_capacity);
alert(`You'll get ${bingo} dollars`);
