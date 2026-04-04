const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let isBig = false;

cookie.onclick = function() {
    clicks++;
    counter.textContent = clicks;

    if (isBig) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }

    isBig = !isBig;
};