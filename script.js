document.addEventListener("DOMContentLoaded", function () {
  var backgroundSound = document.getElementById("backgroundSound");

  document.addEventListener("click", function () {
      backgroundSound.play();
  });

  backgroundSound.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
  });
});
