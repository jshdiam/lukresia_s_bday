document.addEventListener("DOMContentLoaded", function () {
    let appreciationSong = new Audio('Sweet_sweet.mp3'); // Appreciation song

    function stopAllSongs() {
        appreciationSong.pause();
        appreciationSong.currentTime = 0;
    }

    function playAppreciationSong() {
        stopAllSongs(); // Stop any previously playing song
        appreciationSong.play();
    }

    // Play song when entering the Appreciation page
    playAppreciationSong(); // This ensures the song plays when navigating to Appreciation!
});