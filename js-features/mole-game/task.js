(() => {
    let playing = true;
    let activeHole = 1;

    let dead = 0;
    let lost = 0;

    const stop = () => playing = false;

    const getHole = index => document.getElementById(`hole${index}`);
    const deactivateHole = index =>
        getHole(index).className = 'hole';
    const activateHole = index =>
        getHole(index).className = 'hole hole_has-mole';

    const next = () => setTimeout(() => {
        if (!playing) return;

        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);

        next();
    }, 800);

    next();

    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = () => {
            if (!playing) return;

            const hole = getHole(i);
            if (hole.classList.contains('hole_has-mole')) {
                dead++;
                document.getElementById('dead').textContent = dead;
            } else {
                lost++;
                document.getElementById('lost').textContent = lost;
            }

            if (dead === 10) {
                alert('Вы победили!');
                dead = 0;
                lost = 0;
                document.getElementById('dead').textContent = dead;
                document.getElementById('lost').textContent = lost;
            }

            if (lost === 5) {
                alert('Вы проиграли!');
                dead = 0;
                lost = 0;
                document.getElementById('dead').textContent = dead;
                document.getElementById('lost').textContent = lost;
            }
        };
    }
})();