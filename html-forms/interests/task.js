const checkboxElements = document.getElementsByClassName("interest__check");

function doCheckboxClick() {
  const liElement = this.closest("li.interest");
  const childCheckboxes = liElement.querySelectorAll("ul > li > label > input.interest__check");
  for (const childCheckbox of childCheckboxes) {
    childCheckbox.checked = this.checked;
  }
  const parentUlElement = liElement.parentElement.closest("ul.interests");
  if (parentUlElement != null) {
    const siblingCheckboxes = parentUlElement.querySelectorAll("li > label > input.interest__check");
    let isEqual = true;
    for (const siblingCheckbox of siblingCheckboxes) {
      console.log(siblingCheckbox.parentElement.textContent);
      isEqual = isEqual && (siblingCheckbox.checked == this.checked);
    }
    const parentCheckbox = parentUlElement.closest("li.interest").querySelector("label > input.interest__check");
    if (isEqual) {      
      parentCheckbox.checked = this.checked;
    } else {
      parentCheckbox.checked = false;
    }
  }
}

for (const checkboxElement of checkboxElements) {
  checkboxElement.addEventListener("change", doCheckboxClick);
}