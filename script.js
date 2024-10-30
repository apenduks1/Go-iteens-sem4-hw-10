//Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.



//створити функцію з setInterval

function setInterval() {
    alert("1")
    alert("2")
    alert("3")
    alert("4")
    alert("5")
    clearInterval(intervalId) // зупиняємо ��нтервал
}
//Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.
const box1 = document.querySelector(".box1")
const box2 = document.querySelector('.box2')
const boxColorsArray = ["green", "yellow", "orange", "pink", "greey"]
setInterval(() => {
let num = Math.random()

box1.style.backgroundColor = boxColorsArray[num-1]
},2000)

setInterval(() => {
let num = Math.random()

box2.style.backgroundColor = boxColorsArray[num-1]
},3000)

//Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.\

let score = 0
let count = 0
const clickElements = document.querySelectorAll('.clickable')
const timerInterval = 10000
let timerId = setInterval(() => {
let randomElement = clickElements[Math.floor(Math.random() * clickElements.length)]
randomElement.addEventListener('click', () => {
score++
count++
alert(`Score: ${score}, Clicks: ${count}`)
})
}, timerInterval)

//Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

let timeInput = document.querySelector('#timeInput')
let timerId2 = null

function startTimer() {
let time = parseInt(timeInput.value)
if (isNaN(time) || time <= 0) {
alert("Введіть число більше 0!")
return
}
timerId2 = setInterval(() => {
time--
if (time <= 0) {
clearInterval(timerId2)
alert("Час закінчився!")
}
}, 1000)
}