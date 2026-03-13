<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Таймер обратного отсчёта</title>
</head>

<body>

<h1>До конца конкурса осталось:</h1>
<span id="timer">10</span>

<script>
const timer = document.getElementById('timer');

let time = parseInt(timer.textContent);

const interval = setInterval(function () {

  time--;
  timer.textContent = time;

  if (time <= 0) {
    clearInterval(interval);
    alert('Вы победили в конкурсе!');
  }

}, 1000);
</script>

</body>
</html>