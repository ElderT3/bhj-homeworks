<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Игра Убей кротов</title>
<style>
  .hole-game {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
  }
  .hole {
    width: 90px;
    height: 90px;
    margin: 5px;
    background-color: #ddd;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }
  .hole_has-mole {
    background-color: brown;
  }
</style>
</head>
<body>

<h1>Игра «Убей кротов»</h1>
<p>Победы: <span id="wins">0</span> | Поражения: <span id="losses">0</span></p>

<div class="hole-game">
  <div class="hole" id="hole1"></div>
  <div class="hole" id="hole2"></div>
  <div class="hole" id="hole3"></div>
  <div class="hole" id="hole4"></div>
  <div class="hole" id="hole5"></div>
  <div class="hole" id="hole6"></div>
  <div class="hole" id="hole7"></div>
  <div class="hole" id="hole8"></div>
  <div class="hole" id="hole9"></div>
</div>

<script>
const holes = 9;
const winsElem = document.getElementById('wins');
const lossesElem = document.getElementById('losses');

let wins = 0;
let losses = 0;
let activeMole = null;

// Возвращает элемент лунки по индексу
function getHole(index) {
  return document.getElementById('hole' + index);
}

// Ставим крота в случайную лунку
function placeMole() {
  // Убираем предыдущего крота
  if (activeMole) {
    activeMole.classList.remove('hole_has-mole');
  }
  const index = Math.floor(Math.random() * holes) + 1;
  activeMole = getHole(index);
  activeMole.classList.add('hole_has-mole');
}

// Обработчик клика по лунке
function clickHole(event) {
  const hole = event.currentTarget;
  if (hole.classList.contains('hole_has-mole')) {
    wins++;
  } else {
    losses++;
  }

  // Обновляем счетчики на странице
  winsElem.textContent = wins;
  lossesElem.textContent = losses;

  // Проверка окончания игры
  if (wins >= 10) {
    alert('Вы победили! 🏆');
    wins = 0;
    losses = 0;
  } else if (losses >= 5) {
    alert('Вы проиграли 😢');
    wins = 0;
    losses = 0;
  }

  // Ставим нового крота
  placeMole();
}

// Назначаем обработчик на все лунки
for (let i = 1; i <= holes; i++) {
  getHole(i).addEventListener('click', clickHole);
}

// Ставим первого крота
placeMole();
</script>

</body>
</html>