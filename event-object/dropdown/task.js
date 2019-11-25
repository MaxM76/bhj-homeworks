const dropdownListValueElements = document.getElementsByClassName("dropdown__value");
const dropdownListItems = document.getElementsByClassName("dropdown__item");

function onClickDropdownListValueElement() {
  let dropdownList = this.parentElement.querySelector("ul.dropdown__list");
  if (dropdownList.classList.contains("dropdown__list_active")) {
    hideDropdownList(dropdownList);
  } else {
    showDropdownList(dropdownList);
  }
}

function onClickDropdownItem() {
  let dropdownListValueElement = this.parentElement.parentElement.querySelector("div.dropdown__value");
  dropdownListValueElement.click(); 
  dropdownListValueElement.textContent = this.textContent;
  event.preventDefault();
}

function showDropdownList(dropdownList) {
  dropdownList.classList.add("dropdown__list_active");
}

function hideDropdownList(dropdownList) {
  dropdownList.classList.remove("dropdown__list_active");
}

for (let i = 0; i < dropdownListValueElements.length; i++) {
  dropdownListValueElements.item(i).addEventListener("click", onClickDropdownListValueElement);
}

for (let i = 0; i < dropdownListItems.length; i++) {
  dropdownListItems.item(i).addEventListener("click", onClickDropdownItem);
}