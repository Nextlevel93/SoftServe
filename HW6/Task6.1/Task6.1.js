let result = [];
let firsttd = div1.getElementsByTagName('td');

function getListContent() {
    for(let i=1; i<=10; i++) {
    let div1 = document.createElement('tr');
    div1.append();
    result.push(div1);
    for(let p=1; p<=10; p++){
    let div1 = document.createElement('td');
    div1.append();
     result.push(div1);      
  }
  }
  
  return result;
  
}
div1.append(...getListContent());

function getRandomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
} 

const arr = [];
for(let start=1;start<=100;start++){
  arr.push(start);
}
function getrandomcell2(){
  let final=arr;
  let length =final.length;
  let  randomNum = Math.floor(Math.random() * length);
  let i =final.indexOf(randomNum);
  final.splice(i,1);
    //console.log(final[randomNum],i,final.length);
   return final[randomNum];
}


setInterval(function changeColor () {
       firsttd[getrandomcell2()].style.background = getRandomColor(); 
    }
,1000);
  
  

