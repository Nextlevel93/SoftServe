let text = "df take bitcoin over f the df";
let count = 0;
let min=2;
for (let char of text) {
          if( char == " "){
            if (min>count){
            min = count;}
            count=0;         
            continue;      
          }   
       // console.log(min);  
        count++;       
}
console.log(min);  
 