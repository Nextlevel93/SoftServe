    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    let froggy = new Image();
        

var x = 15,
    y = canvas.height/2-15,
    velY = 0,
    velX = 0,
    speed = 2,
    friction = 0.98,
    keys = [];

function update() {
    requestAnimationFrame(update);
    
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    
    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= 450) {
        x = 450;
    } else if (x <= 5) {
        x = 5;
    }

    if (y > 290) {
        y = 290;
    } else if (y <= 5) {
        y = 5;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height );
    ctx.beginPath();
 
    froggy.src = 'Thefrog.png';
    ctx.drawImage(froggy,x,y, 30, 30 );
        
    
    ctx.fill();
}

update();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

