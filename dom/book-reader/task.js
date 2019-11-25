const fontSizeControls = document.getElementsByClassName("font-size");
const books = document.getElementsByClassName("book");

function resetActiveControl(bookControlDiv) {
  bookControlDiv.querySelector("a.font-size_active").classList.remove("font-size_active");
}

function   changeBookFontSize(size) {
  for (const book of books) {
    let currentSize;
    if (book.classList.contains("book_fs-big")) {
      currentSize = "big";      
    } else if (book.classList.contains("book_fs-small")) {
      currentSize = "small";
    }
    if (currentSize != size) {
      switch(size) {
        case "small":
          book.classList.remove("book_fs-big");
          book.classList.add("book_fs-small");
          break;
        case "big":
          book.classList.remove("book_fs-small");
          book.classList.add("book_fs-big");
          break;
        default:
          book.classList.remove("book_fs-small");
          book.classList.remove("book_fs-big");
      }
    }
  }  
}  

function doFontSizeControlsClick() {
  resetActiveControl(this.closest("div.book__control"));
  this.classList.add("font-size_active");
  changeBookFontSize(this.dataset.size);
  event.preventDefault();
}

for (const fontSizeControl of fontSizeControls) {
  fontSizeControl.addEventListener('click', doFontSizeControlsClick);
}
