document.querySelector('.btn').addEventListener('click', function () {
    var gameplayCheck = "beginning";
    localStorage.setItem('gamePlayPage', JSON.stringify(gameplayCheck));
});
