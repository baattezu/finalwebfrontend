document.addEventListener("DOMContentLoaded", function () {
    const scrollButtons = document.querySelectorAll(".scroll-left, .scroll-right");

    scrollButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const rowId = this.getAttribute("data-row");
            const storeGrid = document.getElementById(rowId);

            if (storeGrid) {
                const scrollDistance = this.classList.contains("scroll-left") ? -400 : 400;

                storeGrid.scrollBy({
                    left: scrollDistance,
                    behavior: "smooth",
                });
            }
        });
    });
});

var buttons = document.querySelectorAll('.soundButton');

var sound = new Audio('audio/click.mp3');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    sound.play();
  });
});


function zoom(event, imageId) {
    const image = document.getElementById(imageId);
  
    const boundingRect = image.getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    const mouseY = event.clientY - boundingRect.top;
  
    const percentX = (mouseX / boundingRect.width) * 100;
    const percentY = (mouseY / boundingRect.height) * 100;
  
    image.style.transformOrigin = `${percentX}% ${percentY}%`;
    image.classList.add('zoomed');
  }
  
  function resetZoom(imageId) {
    const image = document.getElementById(imageId);
    image.style.transformOrigin = '0 0';
    image.classList.remove('zoomed');
  }
  
// keyboard

function playKeyboardSound() {
    // Assuming you have an audio file named "typing-sound.mp3"
    var audio = new Audio('/audio/typing-sound.mp3');
    audio.play();
}

document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the one you want to trigger the sound
    // For example, you can use the 't' key
    if (event.key === 't') {
        playKeyboardSound();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // After the opening animation, hide the animation container
    const openingAnimation = document.querySelector(".opening-animation");
    
    openingAnimation.addEventListener("animationend", function() {
        openingAnimation.style.display = "none";
      });
  });