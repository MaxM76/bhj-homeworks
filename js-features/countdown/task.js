function refreshTimer(step) {
  const timer = document.getElementById("timer");
  let time = timer.textContent;

  setTimeout(function go() {    
    if (time > 0) {
      setTimeout(go, step);
    } else {
    	alert("Вы победили в конкурсе!");
    	return;
    }
    time--;
    document.getElementById("timer").textContent = time;
  }, step);
}

refreshTimer(1000);