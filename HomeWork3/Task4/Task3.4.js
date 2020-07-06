let regexp = /\d/;
let mass = "is2 Thi1s T4est 3a";
let i = mass.split(" ");
let new_Mass = [];
let x;
for( let y = 0; y < i.length; y++){
   let x = i[y].match(regexp);
   new_Mass[x] = i[y];
  }
console.log(new_Mass);
