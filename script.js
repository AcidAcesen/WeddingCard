document.addEventListener("DOMContentLoaded", function () {
    var backgroundSound = document.getElementById("backgroundSound");
  
    backgroundSound.play();
  
    backgroundSound.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });
  });
  