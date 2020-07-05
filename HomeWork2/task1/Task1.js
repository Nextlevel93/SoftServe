let arr = [+prompt(`Enter rooms length`, 1),
          +prompt(`Enter rooms width`,1),
          +prompt(`Enter rooms heigth`,1)];
const sqr = 16;
let num_Of_Tips = Math.ceil((arr[0]*arr[2]+arr[0]*arr[1])/sqr);
console.log(num_Of_Tips);
