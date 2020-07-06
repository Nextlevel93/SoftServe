function correctLine(){
   let regexp = /\d/;
  let i = mass.split(" ");
  let new_Mass = [];
  let x;
  for( let y = 0; y < i.length; y++){
   let x = i[y].match(regexp);
   new_Mass[x] = i[y];
  }
  new_Mass.shift();
  console.log(new_Mass);
  }

let mass = "4of Fo1r pe6ople g3ood th5e the2";
correctLine(mass);
