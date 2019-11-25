function showRotatorCaseElement(rotatorCaseElement) {
  rotatorCaseElement.classList.add("rotator__case_active");
}

function hideRotatorCaseElement(rotatorCaseElement) {
  rotatorCaseElement.classList.remove("rotator__case_active");
}

function initRotator(rotator) {
  const activeRotatorCaseElement = rotator.querySelector("span.rotator__case_active");
  setTimeout(refreshRotator.bind(rotator), activeRotatorCaseElement.dataset.speed);
}

function refreshRotator() {
	const rotatorCaseElements = this.querySelectorAll("span.rotator__case");
  const activeRotatorCaseElement = this.querySelector("span.rotator__case_active");
	let nextRotatorCaseElement;
	while (true) {
    let index = Math.floor(Math.random() * rotatorCaseElements.length);
    nextRotatorCaseElement = rotatorCaseElements[index];
    if (nextRotatorCaseElement.textContent != activeRotatorCaseElement.textContent) {
    	break;
    }
	}
	hideRotatorCaseElement(activeRotatorCaseElement);
	showRotatorCaseElement(nextRotatorCaseElement);
	nextRotatorCaseElement.style.color = nextRotatorCaseElement.dataset.color;
  setTimeout(refreshRotator.bind(this), nextRotatorCaseElement.dataset.speed);
}

function getRotators() {
	let rotatorSpanElements = document.getElementsByClassName("rotator");
	var result = [];
	for (const rotatorSpanElement of rotatorSpanElements) {
    result.push(rotatorSpanElement.closest("p"));
	}
	return result;
}

const rotatorElements = getRotators();
for (const rotatorElement of rotatorElements) {

  initRotator(rotatorElement);
}
