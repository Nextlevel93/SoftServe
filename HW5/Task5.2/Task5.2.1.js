const number = 42;
let arrey_Num = String(number);
let new_Number =  arrey_Num.split("");
let more=[];

function decade (){
  let more=[];
  if(new_Number[0]==="1"){
    if(arrey_Num==="10"){
      console.log("Десять");
    }
    if(arrey_Num==="11"){
      console.log("Одинадцать");
    }
    if(arrey_Num==="12"){
      console.log("Двенадцать");
    }
    if(arrey_Num==="13"){
      console.log("Тринадцать");
    }
    if(arrey_Num==="14"){
      console.log("Четырнадцать");
    }
    if(arrey_Num==="15"){
      console.log("Пятнадцать");
    }
    if(arrey_Num==="16"){
      console.log("Шестнадцать");
    }
     if(arrey_Num==="17"){
      console.log("Семнадцать");
    } 
    if(arrey_Num==="18"){
      console.log("Восемнадцать");
    } 
    if(arrey_Num==="19"){
      console.log("Девятнадцать");
    }     
  }
  else if (new_Number[0]==="2"){
    more.push("двадцать")
  }
  else if (new_Number[0]==="3"){
    more.push("тридцать")
  }
  else if (new_Number[0]==="4"){
    more.push("сорок")
  }
  else if (new_Number[0]==="5"){
    more.push("пятдесят")
  }
  else if (new_Number[0]==="6"){
    more.push("шестьдесят")
  }
  else if (new_Number[0]==="7"){
    more.push("семдесят")
  }
  else if (new_Number[0]==="8"){
    more.push("восемдесят")
  }
  else if (new_Number[0]==="9"){
    more.push("девяносто")
  }
  
  if  (new_Number[1]==="1"){
    more.push("один")
  }
  
  else if  (new_Number[1]==="2"){
    more.push("два")
  }
  else if (new_Number[1]==="3"){
    more.push("три")
  }
  else if (new_Number[1]==="4"){
    more.push("четыри")
  }
  else if (new_Number[1]==="5"){
    more.push("пять")
  }
  else if (new_Number[1]==="6"){
    more.push("шесть")
  }
  else if (new_Number[1]==="7"){
    more.push("семь")
  }
  else if (new_Number[1]==="8"){
    more.push("восемь")
  }
  else if (new_Number[1]==="9"){
    more.push("девять")
  }
  
  
  
if(number>20){
  console.log(more.join(" ")) ;
}
   

}

decade();



