let mass = "is2 Thi1s T4est 3a";
let i =mass.split(" ")
//console.log(i);  
let new_Mass;
//console.log(i.length); 
for( let x=0; x<i.length; x++){
    var r =  new RegExp("\d+");
    i[x].match(r);
    console.log(i[x], r);
}