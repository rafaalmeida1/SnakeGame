let stage = document.getElementById('stage');
let btn = document.getElementById('btn-reset').addEventListener('click', resetGame);
let ctx = stage.getContext('2d');
let score = document.getElementById('score');
let scoreAt = document.getElementById('scoreAtual');

let points = [];

document.addEventListener("keydown", keyPush)

setInterval(game, 100);


const vel = 1;
var vx = vy = 0; // velocidade x e y
var px = 10; // ponto x
var py = 15 // ponto y
var tp = 20; // tamamho da peça
var qp = 25; // quantidade de peças
var ax = ay = 15; // posição inicial da maçã

var trail = [];
var tail = 5;

function game(){

    px += vx;
    py += vy;
    if(px < 0){
        px = qp-1;
    }
    if(px > qp-1){
        px = 0;
    }
    if(py < 0){
        py = qp-1;
    }
    if(py > qp-1){
        py = 0;
    } //mudar talvez



    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = 'red'
    ctx.fillRect(ax*tp, ay*tp, tp, tp);
    

    ctx.fillStyle = 'rgb(21, 201, 21)';
    for(var i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp);
        if(trail[i].x == px && trail[i].y == py){
            vx = vy = 0;
            tail = 5;
            score.innerHTML = scoreAt.innerHTML;
            setInterval ((points = []), 1000);
        }
    }

    trail.push({x:px, y:py});
    while(trail.length > tail){
        trail.shift(); // remove o primeiro elemento do array
    }

    if(ax == px && ay == py){
        tail++;
        ax = Math.floor(Math.random()*qp);
        ay = Math.floor(Math.random()*qp);
        points.push(1)
        scoreAt.innerHTML = points.reduce((a, b) => a + b, 0);
    }
    ctx.start()
    
}

function keyPush(event){
    switch(event.keyCode){
        //left
        case 37: 
            vx = -vel;
            vy = 0;
            break;
        case 65:
            vx = -vel;
            vy = 0;
            break;
        //up
        case 38:
            vx = 0;
            vy = -vel;
            break;
        case 87:
            vx = 0;
            vy = -vel;
            break;
        //right
        case 39:
            vx = vel;
            vy = 0;
            break;
        case 68:
            vx = vel;
            vy = 0;
            break;
        //down
        case 40:
            vx = 0;
            vy = vel;
            break;
        case 83:
            vx = 0;
            vy = vel;
            break;
    }

    if(event.keyCode == 32){
        resetGame();
    }
}


function resetGame(){
    px = 10;
    py = 15;
    vx = vy = 0;
    tail = 5;
    trail = [];
    ax = ay = 15;
    score.innerHTML = 0;
}

    