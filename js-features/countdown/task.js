/*
Прочитайте данные о текущем количестве секунд таймера в переменную. Это будет стартовое значение таймера
Каждую секунду уменьшайте значение таймера на 1
По окончанию счёта выведите сообщение «Вы победили в конкурсе!»
 */
function refreshTimer(step) {
  var timer = document.getElementById("timer");
  var time = timer.innerHTML;

  setTimeout(function go() {    
    if (time > 0) {
      setTimeout(go, step);
    } else {
    	alert("Вы победили в конкурсе!");
    	return;
    }
    time--;
    document.getElementById("timer").innerHTML = time;    
  }, step);
}

refreshTimer(1000);