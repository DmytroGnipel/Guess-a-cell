//get and create needed elements
let body = document.querySelector('body')
let table = document.createElement('table')
let para = document.createElement('p')
body.appendChild(table)
body.insertAdjacentElement('afterbegin', para)

//filling a table 10x10
let count1 = 1
for (let i = 1; i <= 10; i++) {
let row = document.createElement('tr')
for (let k = 1; k <= 10; k++) {
    let cell = document.createElement('td')
    cell.textContent = count1
row.appendChild(cell)
count1++
    }
table.appendChild(row)
}

//get numbers guessed by computer
let randomArray = []
for (let i = 1; randomArray.length < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    if (!randomArray.includes(randomNumber)) randomArray.push(randomNumber)
}
//game
let count2 = 0
let td = document.querySelectorAll('td')
for (let elem of td) {
elem.addEventListener('click', () => {
    if (randomArray.includes(+elem.textContent)) {
        count2++
        elem.style.backgroundColor = 'green'
        }
    if (count2 === 10) para.textContent = 'You won!!!'
})
}

//countdown
let count3 = 100
let myInterval = setInterval(() => {
countdown()
}, 1000)

let countdown = () => {
    if (count3 === 0) {
        table.style.display = 'none'
        para.textContent = 'You lost!!!'
        clearInterval(myInterval)
        }
    else {
    if (count2 === 10) clearInterval(myInterval)
    else
    para.textContent = `You have ${count3} seconds to find all cells`}
    count3--
}