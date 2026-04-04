const timerEl = document.getElementById('timer');

let timeLeft = parseInt(timerEl.textContent, 10);

const countdown = setInterval(() => {
    timeLeft--; // уменьшаем на 1
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);