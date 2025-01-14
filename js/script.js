// genera 5 numeri 
// fa il countdown 
// finito il countdown fa apparire gli input
// valuta quali e quanti numeri sono giusti

const time = 10

const countdown = document.getElementById("countdown")

let numbers = []

for (let i = 0; numbers.length < 5; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
}

console.log(numbers);

let count = time

let timer = setInterval(() => {
    if (count === 0) {
        clearInterval(timer)
        countdown.innerHTML = 0
    }
    else {
        console.log(count);
        countdown.innerHTML = count
        count-=1
    }
}, 1000);