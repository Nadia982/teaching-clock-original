const numberHours = document.querySelector(".number-hours");

const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
//create number hours

const barElement = [];
//create bars

for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(" "));

for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(" "));

const handHours = document.querySelector(".hand.hours");

const handMinutes = document.querySelector(".hand.minutes");

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;

  handHours.style.transform = `rotate(${
    currentHours * 30 + currentMinutes / 2
  }deg)`;
}
getCurrentTime();

//call getCurrentTime to set clock hands every second

setInterval(getCurrentTime, 1000);
