let text = "df take bitcoin over fdf the dfd";
let count = 0;
let min=10;
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
 