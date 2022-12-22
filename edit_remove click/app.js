const btn = document.querySelector('.btn')
const textAdd = document.getElementById('textAdd')
const keep = document.getElementById('keep')

let x = 1
let arr = [{
    id: 1,
    text: "salam"

}]

function Call() {
    // $ { inc }
    // $ { inc }
    // $ { inc }
    let inc = x++;
    let div = document.createElement('div')
    div.className = `container`
    div.setAttribute('id', `test${inc}`)
    let p = document.createElement('p')
    p.className = `text `
    p.textContent = "Somtimes you get fell inside and I want to kill it"
    let btnEdit = document.createElement('button')
    btnEdit.className = `edit`
    btnEdit.textContent = "🔁"
    let btnRemove = document.createElement('button')
    btnRemove.className = `remove`
    btnRemove.textContent = '❌'
    keep.append(div)
    div.append(p, btnEdit, btnRemove)
    let test = document.getElementById(`test${inc}`)
        // console.log(test)
    btnRemove.addEventListener('click', () => {
        // test.style.display = "none"
        test.remove()
    })
    btnEdit.addEventListener('click', () => {
        let rewrite = prompt('hi, What do you want to write ')
        console.log(rewrite)
        if (rewrite == null) {
            test.children[0].textContent = 'why 🤬'
        } else if (rewrite != "") {
            test.children[0].textContent = rewrite

        } else {
            test.children[0].textContent = 'your reason for keeping it blank'

        }

    })

}
btn.addEventListener('click', Call)