const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(element => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);

checkReveal();