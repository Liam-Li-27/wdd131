const playButton = document.getElementById('bgm_button');
const music = document.getElementById('bgm');

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
