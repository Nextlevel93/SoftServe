1) 
let a = +prompt (`Enter your age`);
switch (true) {
  case a>0  && a<=12:
    console.log( 'child' );
    break;
  case a>12 && a<18:
    console.log( 'teenager' );
    break;
  case a>18 &&a<=60:
    console.log( 'adult' );
    break;
  case a>60 &&a<=130:
    console.log( 'pensioner' );
    break;  
  default:
   console.log( 'Wrong data' );
}

2)
let a = +prompt (`Enter number from 0 to 9 `);
let arr = [")","!","@","#","$","%","^","&","*","("];
console.log( arr[a] );
/* Из 3х предложенных вариантов использовал бы switch, 
но все-равно было бы больше по объему.*/

3) 
let a = +prompt(`Enter number from 100 to 999 `);
let x = `Ошибка, вы ввели не трехзначное число, повторите еще раз!`;

if(a>=1000 || a<100){
  console.log(`${x}`)
}
else{
  let first  = Math.floor(a/100);
  let decade = a%100;
  let second = Math.floor(decade/10);
  let third  = a%10;
     if( first == second && second == third){
       console.log('All numbers are equal')
     }
  else if(first == second || first == third || third == second){
     console.log('There`re equal numbers ')
  }
  else{
     console.log('There`re no equal numbers')
  }
}
