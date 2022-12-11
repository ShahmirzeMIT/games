const container = document.querySelector('.container')
let ball = document.getElementById('ball')
const block = document.querySelector('.block')


let ballX = 0
let ballY = 0
let ballDx = 5
let ballDy = 5


function movie() {
    if (ballX < 0 || ballX >= 760) ballDx *= -1
    if (ballY < 0 || ballY >= 460) ballDy *= -1
    ballX += ballDx
    ballY += ballDy
    ball.style.left = ballX + 'px'
    ball.style.bottom = ballY + 'px'


}

setInterval(movie, 40)