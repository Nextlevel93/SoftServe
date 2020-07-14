const  str = "I`m 27 years Old";
let search_Numbers = /\d/;
let serach_Letters = /\w/;

function A(){
  let new_str = [];
  let letters=0;
  let symbols=0;
    for (let i=0; i<str.length; i++){
      str[i].match(search_Numbers)?new_str.push("_"):
      str[i].toUpperCase()?new_str.push(`str[i].toLowerCase()`):
      str[i].toLowerCase()?new_str.push(`str[i].toUpperCase()`):0
      ;
    }  
  return (`${new_str}`);
}
console.log(A(str));
