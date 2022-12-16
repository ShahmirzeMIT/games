const text = document.querySelector('.text')
const remove = document.getElementById('remove')
const edit = document.getElementById('edit')
const container = document.querySelector('.container')
const textAdd = document.getElementById('textAdd')
const btn = document.querySelector('.btn')
remove.onclick = () => {
    container.style.display = "none"
}
if (text.style.display !== "none") {
    edit.onclick = () => {
        let metn = prompt('hi make up friends please')
        if (metn.length != 0) {
            text.textContent = metn.replaceAll(":)", "😀")
        }
    }
}