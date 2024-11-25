let groupBtn = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operators')
let numHolder= document.querySelector('input')
let add= document.querySelector('.add')
let clear = document.querySelector(".clear")
let result
let number
let value
let storage = new Array()
let operate = new Array()


groupBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        numHolder.value += btn.innerText
    })
})
operators.forEach(btn => {
    btn.addEventListener('click', () => {
        number = parseInt(numHolder.value)
        storage.push(number)
        numHolder.value = ""
        value = storage[0]

        if (operators[0] == storage[1]) {
            value += storage[2]
        } else if (operators[1] == storage[1]) {
            value -= storage[2]
        } else if (operators[2] == storage[1]) {
            value /= storage[2]
        } else if (operators[3] == storage[1]) {
            value *= storage[2]
        }
        storage = []
        storage.push(value)
        storage.push(btn)
    })
})
operators[4].addEventListener('click', () => numHolder.value = value)
clear.addEventListener('click', () => {
    storage = []
    operate = []
    numHolder.value = ""
})