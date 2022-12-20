const colorMode = document.getElementById('colorMode')
const change = document.getElementById('change')
const pointOutText = document.querySelector('.pointOutText')
const write = document.getElementById('write')
const result = document.querySelector('.result')
let words = [{
        en: "Hi",
        az: "Salam"
    },
    {
        en: "Dad",
        az: "Ata"
    },
    {
        en: "Mom",
        az: "Ana"
    },
    {
        en: "Brother",
        az: "Qardas"
    },
    {
        en: "Sister",
        az: "Bacı"
    },
    {
        en: "Behalf of",
        az: "Adına"
    }
]

function random() {
    let shuffle = Math.floor(Math.random() * words.length)
    pointOutText.textContent = words[shuffle].en
    let p = document.createElement('p')
    p.textContent = words[shuffle].en
    result.append(p)
}
random()








write.addEventListener('keydown', (e) => {
    let text = write.value
    if (e.key == "Enter" && text.length != "") {
        console.log(text.trim())
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