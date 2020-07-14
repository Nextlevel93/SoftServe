let DNA = "ATTDGC";

function reject (){
  let new_DNA=[];
  let i=0;
  for(i; i<DNA.split("").length; i++){
    if(DNA[i]==="A"){
       new_DNA.push("T");
    }
    else if(DNA[i]==="T"){
       new_DNA.push("A");
    }
     else if(DNA[i]==="C"){
      new_DNA.push("G");
    }
     else if(DNA[i]==="G"){
       new_DNA.push("C");
    }
  }
   return new_DNA;
}

console.log(reject(DNA));