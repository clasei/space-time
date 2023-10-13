let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerRunning = false;

function toggleTimer() {
    if (!timerRunning) {
        timerRunning = true;
        document.getElementById("start-btn").innerText = "Pause ";
        startTimer();
    } else {
        timerRunning = false;
        document.getElementById("start-btn").innerText = "Re-start ";
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
        document.getElementById("seconds").innerText = `${seconds}s`;
        document.getElementById("minutes").innerText = `${minutes}m`;
        document.getElementById("hours").innerText = `${hours}h`;
    }, 1000);
}

function clearTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerRunning = false;
    document.getElementById("seconds").innerText = "0s";
    document.getElementById("minutes").innerText = "0m";
    document.getElementById("hours").innerText = "0h";
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

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        toggleTimer();
        
        // Cambio de color para el botón start/pause cuando es presionada la barra espaciadora.
        const startBtn = document.getElementById("start-btn");
        if (timerRunning) {
            startBtn.style.backgroundColor = "rgba(0, 0, 0, 0.1)"; // Color cuando está en Play.
        } else {
            startBtn.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Color cuando está en Pause.
        }

        event.preventDefault();
    }
});

