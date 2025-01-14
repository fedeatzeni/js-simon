// genera 5 numeri 
// fa il countdown 
// finito il countdown fa apparire gli input
// valuta quali e quanti numeri sono giusti

const time = 0

const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const message = document.getElementById("message");

const input = document.querySelectorAll("input");
const button = document.querySelector("button");

//add numbers
let numbers = [];

for (let i = 0; numbers.length < 5; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
}

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li");
    li.append(numbers[i]);
    numbersList.appendChild(li);
}

//timer
let count = time

let timer = setInterval(() => {
    if (count === 0) {
        clearInterval(timer);
        countdown.innerHTML = 0;
        //display
        numbersList.className = "d-none";
        answersForm.className = "d-block";
    }
    else {
        //console.log(count);
        countdown.innerHTML = count;
        count -= 1;
    }
}, 1000);

// inputs check
//console.log(input);
let inputList = [];

button.addEventListener("click", (event) => {

    event.preventDefault();

    for (let i = 0; i < input.length; i++) {
        inputList.push(parseInt(input[i].value))
    }
    console.log(inputList);

    //output
    let rightNumbers = []
    for (let i = 0; i < inputList.length; i++) {
        if (numbers.includes(inputList[i])) {
            rightNumbers.push(inputList[i])
        }
    }

    console.log(rightNumbers);

    message.innerHTML = rightNumbers.length + " giuste," + " " + rightNumbers
})

