var canvas = document.getElementById("Snake");
var context = canvas.getContext("2d");

var game_over= 0;

var snakew=8;
var snakeh =8;
function drawSnake(x,y){
    context.fillStyle = "White";
    context.fillRect (x*snakew,y*snakeh,snakew,snakeh);
    context.fillStyle = "yellow";
    context.strokeRect(x*snakew,y*snakeh,snakew,snakeh);
}

var len = 4
snake = [];
for (var i = len-1; i>=0  ;i--)
{   
    snake.push({
        x:i,
        y:0
    })
}




var food={
    x:Math.round(Math.random()*(canvas.width/snakew)+1),
    y:Math.round(Math.random()*(canvas.height/snakeh)+1)
}

function drawfood(x,y){
    context.fillStyle = "red";
    context.fillRect (x*snakew,y*snakeh,snakew,snakeh);
    context.fillStyle = "yellow";
    context.strokeRect(x*snakew,y*snakeh,snakew,snakeh);

}


document.addEventListener("keydown",dir);
function dir(e){
    if(e.keyCode==37 && dir != "right"){dir="left";}
    else if(e.keyCode==38 && dir != "down" ){dir="up";}
    else if(e.keyCode==39&& dir != "left"){dir="right";}
    else if(e.keyCode==40 && dir != "up"){dir="down";} 
}

let score = document.getElementById('scr') ;


var Sccr = 0;



function draw(){
    if(game_over==1){
        clearInterval(stop);
        alert('Game Over');
        
    }
    
    context.clearRect(0,0,canvas.clientWidth,canvas.height);
for (var i=0 ;i<snake.length ; i++){
    var X = snake[i].x;
    var Y = snake[i].y; 
    drawSnake(X,Y);
}
    drawfood(food.x,food.y);

    //head
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;
    
    
    
    if (dir == "right"){snakeX++}  
    else if(dir=="left") {snakeX--}
    else if(dir=="up") {snakeY--}
    else if(dir=="down") {snakeY++}

    if (snakeX == food.x && snakeY == food.y){
        food={
                x:Math.round(Math.random()*(canvas.width/snakew-1)+1),
                y:Math.round(Math.random()*(canvas.height/snakeh-1)+1)
             }
             var nhead = {
                x: snakeX,
                y:snakeY
                }
                Sccr ++;
                score.innerHTML=Sccr;                
        
    }else{
    snake.pop();
    var nhead = {
        x: snakeX,
        y:snakeY
        }
    }
    var nhead = {
        x: snakeX,
        y:snakeY
        }
        
    //new head
        snakeX++;

        
    snake.unshift(nhead);
    if (snakeX<0 || snakeY<0 || snakeX>=canvas.width/snakew || snakeY >=canvas.height/snakeh){
            game_over=1;
    }
}

var stop = setInterval(draw,100);
    


