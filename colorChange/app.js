const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const lime = document.querySelector(".lime")
const black = document.querySelector(".black")
red.onclick = () => {
    document.body.style.backgroundColor = "red"
}
blue.onclick = () => {
    document.body.style.backgroundColor = "blue"
}
lime.onclick = () => {
    document.body.style.backgroundColor = "lime"
}
black.onclick = () => {
    document.body.style.backgroundColor = "black"
}