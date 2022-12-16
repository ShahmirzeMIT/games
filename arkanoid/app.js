const container = document.querySelector('.container')
let ball = document.getElementById('ball')
const block = document.querySelector('.block')
const finished = document.querySelector('.finished') // eger topun Y kordinati 0 olsa oyun dayanacq

let barX = 0
let ballX = 0
let ballY = 0
let ballDx = 5
let ballDy = 5

// for (let i = 0; i < 12; i++) {
//     const div = document.createElement('div')
//     div.classList.add('blockup')
//     container.append(div)

// }

function blockMove() {
    block.style.left = barX + "px"
}

window.addEventListener('keydown', (e) => {

    if (e.code == 'ArrowRight') {
        if (barX < 530) barX += 10

    } else if (e.code == 'ArrowLeft') {
        if (barX > 0) barX -= 10

    }
    blockMove()
})


function move() {
    if (ballX < 0 || ballX >= 640) ballDx *= -1
    if (ballY < 0 || ballY >= 460) ballDy *= -1
    if (ballY < 0) {
        clearInterval(moveball)
        finished.textContent = 'Oyunu Uduzdunuz 😪 '
    }
    ballX += ballDx
    ballY += ballDy
    ball.style.left = ballX + 'px'
    ball.style.bottom = ballY + 'px'
        //   (`BarX=${barX}  ballX=${ballX} ballY=${ballY}`)

}

let moveball = setInterval(move, 40)