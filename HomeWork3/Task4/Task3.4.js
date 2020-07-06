function correctLine(){
   let regexp = /\d/;
  let i = p.split(" ");
  let new_Mass = [];
  let x;
  for( let y = 0; y < i.length; y++){
   let x = i[y].match(regexp);
   new_Mass[x] = i[y];
  }
  new_Mass.shift();
  new_Mass= new_Mass.join(" ");
  console.log(new_Mass);
  }

let mass = "4of Fo1r fw9 pe6ople 8rw g3ood th5e the2 f7w ";
correctLine(mass);
