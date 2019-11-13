const popupSuccessWindow = document.getElementById("modal_success");
const popupMainWindow = document.getElementById("modal_main");
const modalCloseElements = document.getElementsByClassName("modal__close");
const showSuccessElements = document.getElementsByClassName("show-success");

for (let i = 0; i < modalCloseElements.length; i++) {
  modalCloseElements.item(i).onclick = function () {
  	hidePopupWindow(this.parentElement.parentElement);
  }
}

for (let i = 0; i < showSuccessElements.length; i++) {
  showSuccessElements.item(i).onclick = function () {
    hidePopupWindow(this.parentElement.parentElement);
    showPopupWindow(popupSuccessWindow);
  }
}

showPopupWindow(popupMainWindow);

function showPopupWindow(windowElement) {
  windowElement.classList.add("modal_active");
}

function hidePopupWindow(windowElement) {
  windowElement.classList.remove("modal_active");
}