const book = document.getElementById("book");
const pages = document.querySelectorAll(".page");
let current = 0;

function stopMusic() {
  const audio = document.getElementById("page-music");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

book.addEventListener("click", (e) => {
  const bookWidth = book.offsetWidth;
  const clickX = e.offsetX;

  // Stop music before flipping
  stopMusic();

  // If user clicks on the right half → go forward
  if (clickX > bookWidth / 2) {
    if (current < pages.length) {
      pages[current].classList.add("flipped");
      current++;
    }
  } 
  // If user clicks on the left half → go back
  else {
    if (current > 0) {
      current--;
      pages[current].classList.remove("flipped");
    }
  }

  // Play music only on page 2 (index 1)
  const audio = document.getElementById("page-music");
  if (current === 1 && audio) {
    audio.play();
  }
});
