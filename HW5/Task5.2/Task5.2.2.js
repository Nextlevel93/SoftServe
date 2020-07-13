const  str = "3f-3-%#%@%f&444gDFweger";
let search_Numbers = /\d/;
let serach_Letters = /\w/;

function A(){
  let numbers=0;
  let letters=0;
  let symbols=0;
    for (let i=0; i<str.length; i++){
      str[i].match(search_Numbers)?numbers++:
      str[i].match(serach_Letters)?letters++:symbols++;
    }  
  return (`${numbers} ${letters} ${symbols}`);
}
console.log(A(str));
