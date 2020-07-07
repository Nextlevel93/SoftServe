
function chairs(avaliable_Chairs, need_In_Chairs){
    let current_Num_Of_Chairs=0;
    let num_of_free=[];
    let sum=0;
       for(let rooms=0; rooms<avaliable_Chairs.length; rooms++){
       avaliable_Chairs[rooms][0].length<avaliable_Chairs[rooms][1]?
        current_Num_Of_Chairs=avaliable_Chairs[rooms][1]-avaliable_Chairs[rooms][0].length: 
       current_Num_Of_Chairs=0;  
         num_of_free.push(current_Num_Of_Chairs);
       sum+= current_Num_Of_Chairs;
         sum=need_In_Chairs?break;
       
      // console.log(num_of_free);
     }
       console.log(num_of_free);
      


       let game = [[0, , 1],
            [0, 1, 2],
            [2, 1, 0]];

function lets_Play(){
 for (let subArr of game) {
	for (let elem of subArr) {
		console.log(elem===undefined?"wrong value":elem);
	}
 }    console.log(game);
}

lets_Play(game);

  
    
  }
  chairs( [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]], 4);
  