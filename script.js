// Звук для Адины (звук пука)
document.getElementById('adina-btn').addEventListener('click', function() {
    var fartSound = document.getElementById('fart-sound');
    fartSound.play();
});

// Звук и анимация для Саиды (звук дождя)
document.getElementById('saida-btn').addEventListener('click', function() {
    var rainSound = document.getElementById('rain-sound');
    rainSound.play();

    // Показать анимацию капель
    const card = document.getElementById('saida-card');
    const sprayAnimation = document.createElement('div');
    sprayAnimation.classList.add('spray-animation');

    for (let i = 0; i < 3; i++) {
        const drop = document.createElement('div');
        drop.classList.add('spray-drop');
        sprayAnimation.appendChild(drop);
    }
    card.appendChild(sprayAnimation);

    // Удалить анимацию через 1 секунду
    setTimeout(() => sprayAnimation.remove(), 1000);
});

// Анимация дизлайков для Линары
document.getElementById('linara-btn').addEventListener('click', function() {
    var dislikeSound = document.getElementById('dislike-sound');
    dislikeSound.play();

    // Показать анимацию дизлайков
    const card = document.getElementById('linara-card');
    const dislikeAnimation = document.createElement('div');
    dislikeAnimation.classList.add('dislike-animation');

    for (let i = 0; i < 3; i++) {
        const dislike = document.createElement('div');
        dislike.classList.add('dislike');
        dislike.textContent = '👎';
        dislikeAnimation.appendChild(dislike);
    }
    card.appendChild(dislikeAnimation);

    // Удалить анимацию через 1 секунду
    setTimeout(() => dislikeAnimation.remove(), 1000);
});

// Звук пони для Майи
document.getElementById('maya-btn').addEventListener('click', function() {
    var ponySound = document.getElementById('pony-sound');
    ponySound.play();
});
