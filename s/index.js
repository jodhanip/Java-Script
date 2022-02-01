let inputDir = { x: 0, y: 0 }
let food = { x: 4, y: 5 }
let snakeArr = [{ x: 13, y: 15 }]
let score = 0





setInterval(Game_Engine, 10)


function end(Sna) {
    for (i = 1; i < snakeArr.length; i++) {
        if (Sna[0].x == Sna[i].x && Sna[0].y == Sna[i].y) {
            return true
        }
    }
    if (Sna[0].x >= 18 || Sna[0].x <= 0 || Sna[0].y >= 18 || Sna[0].y <= 0) {
        return true
    }
    return false
}

function Game_Engine() {
    //Part 1 : 
    if (end(snakeArr)) {
        alert("Game Over. Plase PRESS any Key")
        snakeArr = [{ x: 13, y: 15 }]
        inputDir = { x: 0, y: 0 }

    }
    if (snakeArr[0].x == food.x && snakeArr[0].y == food.y) {
        score++
        scoree.innerHTML = "Score : " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        food = { x: food.x = Math.round(Math.random() * 15), y: Math.round(Math.random() * 15) }
    }


    //moveing Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] }
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y
    // snakeArr[0] += inputDir

    //part 2 : Display the snake 
    //Snake
    board.innerHTML = ""
    snakeArr.forEach((ele, index) => {
        a = document.createElement("div")
        a.style.gridRowStart = ele.y
        a.style.gridColumnStart = ele.x
        if (index == 0) {
            a.classList.add("head")
        }
        else {
            a.classList.add("snake")
        }
        board.appendChild(a)
    })

    //food
    b = document.createElement("div")
    b.style.gridRowStart = food.y
    b.style.gridColumnStart = food.x
    b.classList.add("food")
    board.appendChild(b)
}









//main
window.addEventListener("keydown", f => {

    // inputDir = { x: 0, y: 1 }
    switch (f.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir = { x: 0, y: -1 }
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir = { x: 0, y: 1 }
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir = { x: 1, y: 0 }
            break;
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir = { x: -1, y: 0 }
            break;
        default:
            break;
    }

})