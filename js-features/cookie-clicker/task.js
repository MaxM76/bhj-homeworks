const image = document.getElementById("cookie");
var initialWidth = image.width;
var expandFlag = 1;
var clickerCounter = document.getElementById("clicker__counter");
var counter = clickerCounter.innerHTML;

image.onclick = function() {
  var expandRatio = 1.2;
  if (expandFlag > 0) {
    expandRatio = 1.2;
  } else {
    expandRatio = 1;
  }
	
  this.width = initialWidth * expandRatio;
  expandFlag *= -1;
  counter++;
  clickerCounter.innerHTML = counter;

};