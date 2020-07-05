var ticket = prompt (`Enter ticket number`);
	let res     = [];
	let base    = 10;
	let currNum = Math.abs(ticket);
console.log( `${ticket}`);
  console.log( `${currNum}`);
	do {
		let ticket = Math.floor(currNum / base);
		let diff   = currNum - ticket * base;
		res.unshift(diff);
		currNum = ticket;
	} while (currNum != NaN);  
if(res.length!=6 || isNaN(ticket)==true ){
  console.log( 'Wrong data');
}
else{
   let first_Sum = res[0] + res[1] + res[2];
 let second_Sum = res[3] + res[4] + res[5];
first_Sum == second_Sum ? console.log ('Your ticket is lucky'):
console.log( 'Your ticket is ussual');
}
