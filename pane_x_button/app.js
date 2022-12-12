const text = document.querySelector('.text')
const edit = document.querySelector('.edit')



function editText() {
    text.textContent = prompt('yaxsi goplaya bilersen')
    text.style.color = " white"
    text.style.backgroundColor = "lime"
    text.style.borderRadius = "10px"
    text.style.padding = "10px"

}

edit.addEventListener('click', editText)