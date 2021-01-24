const describe = {
        color : 'red',
        capacity : '100%',
}

//class marker{
  // constructor(color, capacity){
    document.getElementById('hello').onkeyup = function () {
          /*  this.capacity = capacity;
            this.color = color;
                console.log(color, capacity);*/
        if (this.value.length > 10) {
        this.style.color = 'red';
        } else {
        this.style.color = 'black';
        }
      /*calculate(){
        console.log('Hello');
            }*/
        }   }
}

const marker1 = new marker('green', '90%');
marker1.calculate();