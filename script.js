let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerRunning = false;

function toggleTimer() {
    if (!timerRunning) {
        timerRunning = true;
        document.getElementById("start-btn").innerText = "Pause";
        startTimer();
    } else {
        timerRunning = false;
        document.getElementById("start-btn").innerText = "Start";
        clearInterval(interval);
    }
}

function startTimer() {
    interval = setInterval(() => {
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
            if (minutes == 60) {
                hours++;
                minutes = 0;
            }
        }
        document.getElementById("second").innerText = `${seconds}s`;
        document.getElementById("minute").innerText = `${minutes}m`;
        document.getElementById("hour").innerText = `${hours}h`;
    }, 1000);
}

function clearTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerRunning = false;
    document.getElementById("second").innerText = "0s";
    document.getElementById("minute").innerText = "0m";
    document.getElementById("hour").innerText = "0h";
    document.getElementById("start-btn").innerText = "Start";
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.getElementById("fullscreen-icon").innerText = "fullscreen_exit";
    } else {
        document.exitFullscreen();
        document.getElementById("fullscreen-icon").innerText = "fullscreen";
    }
}
