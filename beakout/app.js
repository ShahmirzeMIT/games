const container = document.querySelector('.container')
let ball = document.getElementById('ball')
const block = document.querySelector('.block')

let barX = 0
let ballX = 0
let ballY = 0
let ballDx = 5
let ballDy = 5

for (let i = 0; i < 12; i++) {
    const div = document.createElement('div')
    div.classList.add('blockup')
    container.append(div)

}

function blocMovie() {
    block.style.left = barX + "px"
}

window.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowRight') {
        if (barX < 530) barX += 10
    } else if (e.code == 'ArrowLeft') {
        if (barX > 0) barX -= 10
    }

    blocMovie()
})

function movie() {
    if (ballX < 0 || ballX >= 640) ballDx *= -1
    if (ballY < 0 || ballY >= 460) ballDy *= -1
    ballX += ballDx
    ballY += ballDy
    ball.style.left = ballX + 'px'
    ball.style.bottom = ballY + 'px'

}

setInterval(movie, 40)