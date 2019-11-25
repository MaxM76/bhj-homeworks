const hitCounter = document.getElementById("dead");
var hitCount = hitCounter.textContent;
const missCounter = document.getElementById("lost");
var missCount = missCounter.textContent;

function getHole(index) {
  return document.getElementById("hole" + index);  
}

function resetStats() {
  hitCount = 0;
  hitCounter.textContent = hitCount;
  missCount = 0;
  missCounter.textContent = missCount;
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
    if (hitCount == 10) {
      alert("You win!");
      resetStats();
    }
    if (missCount == 5) {
      alert("You loose!");
      resetStats();
    }
  };
}

