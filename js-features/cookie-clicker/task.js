const image = document.getElementById("cookie");
let initialWidth = image.width;
let expandFlag = 1;
const clickerCounter = document.getElementById("clicker__counter");
let counter = clickerCounter.textContent;

image.onclick = function() {
  let expandRatio = 1.2;
  if (expandFlag > 0) {
    expandRatio = 1.2;
  } else {
    expandRatio = 1;
  }
  this.width = initialWidth * expandRatio;
  expandFlag *= -1;
  counter++;
  clickerCounter.textContent = counter;
};