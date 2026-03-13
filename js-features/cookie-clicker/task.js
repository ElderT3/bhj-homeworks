<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Кликер печенек</title>
<style>
  #cookie {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: all 0.1s ease;
  }
  #stats {
    margin-top: 20px;
    font-size: 18px;
  }
</style>
</head>
<body>

<h1>Кликер печенек 🍪</h1>
<img id="cookie" src="https://i.imgur.com/0y0g3wK.png" alt="cookie">
<div id="stats">
  <p>Клики: <span id="clicks">0</span></p>
  <p>Скорость клика (к/с): <span id="speed">0</span></p>
</div>

<script>
const cookie = document.getElementById('cookie');
const clicksElem = document.getElementById('clicks');
const speedElem = document.getElementById('speed');

let clicks = 0;
let lastClickTime = null;
let shrink = false;

cookie.addEventListener('click', () => {
  clicks++;
  clicksElem.textContent = clicks;

  // чередуем уменьшение/увеличение печеньки
  if (shrink) {
    cookie.style.width = '200px';
    cookie.style.height = '200px';
  } else {
    cookie.style.width = '180px';
    cookie.style.height = '180px';
  }
  shrink = !shrink;

  // скорость клика
  const now = new Date();
  if (lastClickTime) {
    const diffSec = (now - lastClickTime) / 1000;
    const speed = (1 / diffSec).toFixed(2);
    speedElem.textContent = speed;
  }
  lastClickTime = now;
});
</script>

</body>
</html>