// something is wrong
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newBeginning = "04 Sep 2023";

function countdown() {
    const futuerDate = new Date(newBeginning);
    const currentDate = new Date();

    const totalSeconds = (futuerDate - currentDate) / 
    1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds ) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds; 
}
countdown();
// call countdown every seconds
setInterval(countdown, 1000);