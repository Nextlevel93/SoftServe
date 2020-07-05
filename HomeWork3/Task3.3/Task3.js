let text = "bitcoin take over the";
let count = 0;
for (let char of text) {
        if( char == " "){
            count=0;
                 continue;
    }
    count++;    
    console.log(count);
    // alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
  }
//console.log(count);