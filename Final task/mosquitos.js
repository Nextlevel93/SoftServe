  function  Mosquito() {
    this.size = Math.floor(Math.random() * Math.floor(10)),
    this.speed = Math.floor(Math.random() * Math.floor(100))
       }

let mosquito = new Mosquito();
for(let i = 0; i<5; i++){
  Mosq.onload = function() {
        let start = Date.now();
        let timer = setInterval(function() {
             let timePassed = Date.now() - start;       
             mosqui.style.right = timePassed / mosquito.speed + 'px';        
             if (timePassed > 2000) clearInterval(timer);
                    
            }, 20);
          }
        
        }         
      
    

        
  /*var newDiv = document.createElement(".msq");
        newDiv.innerHTML = "<h1>Привет!</h1>";

     //Добавляем только что созданый элемент в дерево DOM

    my_div = document.getElementById("msq");
    document.body.insertBefore(newDiv, my_div);
         



window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("Mosquito");
   ctx.drawImage(img, 10, 10);
};*/