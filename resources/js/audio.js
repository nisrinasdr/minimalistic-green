// Audio autoplay
const audioBig = document.getElementById("audioBig");
const audioSmall = document.getElementById("audioSmall");

if ($(window).width() <= 800) {
    
    audioBig.autoplay = false;
    audioSmall.autoplay = true;
    audioSmall.load();
 }
 else {
    audioBig.autoplay = true;
    audioSmall.autoplay = false;
    audioBig.load();
 }