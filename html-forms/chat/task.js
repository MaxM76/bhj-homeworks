const chatWidget = document.querySelector("div.chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );

function getMessageTime() {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return date.toLocaleString("ru", options);
}

function addRobotMessage(message) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${getMessageTime()}</div>
    <div class="message__text">
      ${message}
    </div>
  </div>
`;
}

function addUserMessage(message) {
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${getMessageTime()}</div>
    <div class="message__text">
      ${message}
    </div>
  </div>
`;
}

function getRobotMessage() {
    const messages = [
        'Надо проверить',
        'Уточните ваш вопрос',
        'Подождите еще',
        'Вы уверены?',
        'А оно вам надо?',
        'А губа не треснет?',
        'Подождите, мы тут все проверяем',
        'А нельзя ли поподробнее?',
        'Может умерите свои потребности?',
        'А такое вообще точно у нас есть?'
      ],
      index = Math.floor(Math.random() * messages.length);

    return messages[index];
  }

function proceedChat() {
  if (messages.textContent.trim() == '') {
    startChat();
  } else {
    continueChat();
  }
}

function startChat() {
  addRobotMessage("Добрый день! Чего изволите?");
}

function continueChat() {

}

function doChatUserInput() {
  addUserMessage(chatWidgetInput.value);
  chatWidgetInput.value ='';
  setTimeout(addRobotMessage, Math.floor(Math.random() * 20) * 100, getRobotMessage());
}

function showChatWidget() {
  chatWidget.classList.add("chat-widget_active");
  proceedChat();
}

chatWidget.addEventListener("click", showChatWidget);
chatWidgetInput.addEventListener("change", doChatUserInput);