const text = document.getElementById('text')
const list = document.querySelector('.list')
const add = document.getElementById('add')
let count = 1
add.addEventListener('click', () => {
    const div = document.createElement('div')
    div.className += 'text'
    div.textContent = count++ + "." + text.value
    list.append(div)
})