const book = document.getElementById("book");
  const pages = document.querySelectorAll(".page");
  let current = 0;

  book.addEventListener("click", (e) => {
    const bookWidth = book.offsetWidth;
    const clickX = e.offsetX;

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
  });