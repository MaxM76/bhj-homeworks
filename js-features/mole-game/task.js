var hitCounter = document.getElementById("dead");
var hitCount = hitCounter.textContent;
var missCounter = document.getElementById("lost");
var missCount = missCounter.textContent;

function getHole(index) {
  return document.getElementById("hole" + index);  
}

for (let i=1; i<10; i++) {
  getHole(i).onclick = function () {
    if (this.classList.contains('hole_has-mole')) {
      hitCount++;
      hitCounter.textContent = hitCount;
    } else {
      missCount++;
      missCounter.textContent = missCount;
    }
  }
}

