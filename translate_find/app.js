const colorMode = document.getElementById('colorMode')
const change = document.getElementById('change')
const pointOutText = document.querySelector('.pointOutText')
const write = document.getElementById('write')
const result = document.querySelector('.result')

let langs = Math.floor(Math.random() * words.length)
pointOutText.textContent = words[randomIndex()].en

function show() {
    let enterWord = write.value.trim().toLowerCase()
    let wordAZ = words.find((e) => e.en == pointOutText.textContent).az.toLowerCase()
    let p = document.createElement('p')
    p.textContent += `${pointOutText.textContent} --`
    if (enterWord == wordAZ) {
        p.textContent += wordAZ
    } else {

        p.textContent += `(${enterWord}) ${wordAZ}`
    }
    result.append(p)
    write.value = ""
    pointOutText.textContent = words[randomIndex()].en
}

function randomIndex() {
    return Math.floor(Math.random() * words.length)
}



write.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        if (write.value.trim() !== "") {
            show()
        } else {
            alert('enter word')

        }

    }

})




change.onclick = () => {
    if (colorMode.classList.contains('darkMode')) {
        change.textContent = "🌚"
        colorMode.classList.remove('darkMode')
    } else {
        change.textContent = "🌞"
        colorMode.classList.add('darkMode')
    }
}