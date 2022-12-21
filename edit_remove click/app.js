const textAdd = document.getElementById('textAdd')
const btn = document.querySelector('.btn')
const keep = document.getElementById('keep')
let metn;

function call() {
    let div = document.createElement('div')
    div.classList.add('container')
    let p = document.createElement('p')
    p.classList.add('text')
    p.textContent = "I should have gone to class, but I didn't"
    let btnEdit = document.createElement('button')
    btnEdit.classList.add('edit')
    btnEdit.textContent = "🔁"
    let btnRemove = document.createElement('button')
    btnRemove.classList.add('remove')
    btnRemove.textContent = "❌"
    keep.append(div)
    div.append(p, btnEdit, btnRemove)
}

call()
let x = 0
btn.onclick = () => {
    call()

}

const remove = document.querySelector('.remove')
const edit = document.querySelector('.edit')
const container = document.querySelector('.container')
const text = document.querySelector('.text')
remove.onclick = () => {
    keep.children[x++].style.display = "none"

    // console.log(container.len)
}

if (text.style.display != "none") {
    edit.addEventListener('click', () => {
        metn = prompt('hi make up friends please')
        let colorRed = text.style.color = "red"

        if (metn != null && metn != "") {
            text.textContent = metn.replaceAll(":)", "😀")
        } else if (metn == "") {
            text.textContent = "bos niye saxlamisan mandalin 😡😡😡😡😡😡😡😡"
            colorRed

        } else {
            text.textContent = "🤬 why why 🤬🤬🤬🤬🤬🤬"
            colorRed
        }
    })
}