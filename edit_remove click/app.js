const text = document.querySelector('.text')
const remove = document.querySelector('.remove')
const edit = document.querySelector('.edit')
const container = document.querySelector('.container')
const textAdd = document.getElementById('textAdd')
const btn = document.querySelector('.btn')



remove.onclick = () => {
    container.style.display = "none"
}

if (text.style.display != "none") {
    edit.addEventListener('click', () => {
        let metn = prompt('hi make up friends please')
        if (metn.length != null) {
            text.textContent = metn.replaceAll(":)", "😀")
        }
    })
}

btn.addEventListener('click', () => {
    let divCont = document.createElement('div')
    divCont.classList.add('container')
    let pText = document.createElement('p')
    pText.textContent = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae commodi architecto, vitae eius similique magni a sapiente quo alias! Obcaecati dolore cum, soluta porro recusandae autem consequuntur! Animi, voluptatem incidunt"
    pText.classList.add('text')
    let btnRemove = document.createElement('button')
    btnRemove.classList.add('remove')
    btnRemove.textContent = '❌'
    let btnEdit = document.createElement('button')
    btnEdit.classList.add('edit')
    btnEdit.textContent = '🔁'
    document.body.appendChild(divCont)
    divCont.append(pText, btnRemove, btnEdit)
})