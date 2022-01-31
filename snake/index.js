// Game Constants & Variables
let inputDir = { x: 0, y: 0 }
const foodSound = new Audio("food.mp3")
const gameOverSound = new Audio("gameover.mp3")
const moveSound = new Audio("move.mp3")
const musicSound = new Audio("music.mp3")
let speed = 5
let lastPaintTime = 0
let snakeArr = [{ x: 13, y: 15 }]
let food = { x: 4, y: 8 }
let score=0

// Game Functions
// function main(ctime) {
//     window.requestAnimationFrame(main)
//     // console.log(ctime)
//     if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
//         return;
//     }
//     lastPaintTime = ctime;
//     gameEngine();
// }
function main(){
    gameEngine()
}
setInterval(main,200)

function isCollide(snake){
        // If you bump into yourself 
    for(i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x&&snake[i].y===snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true;
    }
    return false
}

function gameEngine() {
    //part 1 : Updating snake array & food
    if(isCollide(snakeArr)===true){
        gameOverSound.play()
        musicSound.pause()
        inputDir={x:0,y:0}
        alert("Game over,Press any key to play again!")
        snakeArr = [{ x: 13, y: 15 }]
        score=0
    }
        // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score+=1;
        scoreBox.innerHTML="Score : "+score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a=2
        let b=16
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        // food = { x: Math.round( Math.random()*15), y: Math.round( Math.random()*15) }
    }

    // Moving Snake
    for (i = snakeArr.length - 2; i >= 0; i--) {
        
        snakeArr[i+1]={...snakeArr[i]}
    }
    snakeArr[0].x+=inputDir.x
    snakeArr[0].y+=inputDir.y

    //part 2 : Display the snake 
    board.innerHTML = ""
    snakeArr.forEach((ele, index) => {
        // console.log(index)
        SnakeElement = document.createElement("div")
        SnakeElement.style.gridRowStart = ele.y
        SnakeElement.style.gridColumnStart = ele.x
        if (index === 0) {
            SnakeElement.classList.add("head")
        }
        else {
            SnakeElement.classList.add("snake")
        }
        board.appendChild(SnakeElement)
    })
    // Display food
    foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    board.appendChild(foodElement)
}







// Main logic starts here
// window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    inputDir = { x: 0, y: 1 }  //start the game
    moveSound.play()
    // console.log(e)
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;
    }

})