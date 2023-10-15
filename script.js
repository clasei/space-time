function initParticles() {
    particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#cccccc"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#aaaaaa",
                "opacity": 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "retina_detect": true
    });
}

let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerRunning = false;

function toggleTimer() {
    const startBtn = document.getElementById("start-btn");
    if (!timerRunning) {
        timerRunning = true;
        startBtn.innerText = "Pause ";
        startBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // play color
        startBtn.style.color = "whitesmoke";
        startTimer();
    } else {
        timerRunning = false;
        startBtn.innerText = "Re-start ";
        startBtn.style.backgroundColor = "rgba(0, 0, 0, 0.35)"; // pause color
        startBtn.style.color = "whitesmoke";
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

    const startBtn = document.getElementById("start-btn");
    startBtn.innerText = "Start";
    startBtn.style.backgroundColor = ""; // restores start/pause button's background color
    startBtn.style.color = ""; // restores start/pause button's text color
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
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("currentYear");
    yearElement.textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function() {
    initParticles();
    const yearElement = document.getElementById("currentYear");
    yearElement.textContent = new Date().getFullYear();
});