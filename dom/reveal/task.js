const revealElements = document.getElementsByClassName("reveal");

function showRevealElement(revealElement) {
  revealElement.classList.add("reveal_active");
}

function doScroll() {
  for (const revealElement of revealElements) {
  	if (revealElement.getBoundingClientRect().top < window.innerHeight) {
      showRevealElement(revealElement);
    }
  }
}

window.addEventListener('scroll', doScroll);