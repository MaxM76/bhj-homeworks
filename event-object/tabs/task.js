const tabHeaders = document.getElementsByClassName("tab");
const tabContents = document.getElementsByClassName("tab__content");

function showTabHeader(tabHeader) {
  tabHeader.classList.add("tab_active");
}

function hideTabHeader(tabHeader) {
  tabHeader.classList.remove("tab_active");
}

function showTabContent(tabContent) {
  tabContent.classList.add("tab__content_active");
}

function hideTabContent(tabContent) {
  tabContent.classList.remove("tab__content_active");
}

function findTab(content) {
	for (let i = 0; i < tabHeaders.length; i++) {
    if (tabHeaders[i].textContent == content) {
    	return i;
    }
	}
	return 0;
}

function doTabHeaderClick(event) {
  let activeTabOldIndex = findTab(document.querySelector("div.tab_active").textContent);
	hideTabHeader(tabHeaders[activeTabOldIndex]);
	hideTabContent(tabContents[activeTabOldIndex]);
	let activeTabNewIndex = findTab(event.target.textContent);
	showTabHeader(tabHeaders[activeTabNewIndex]);
	showTabContent(tabContents[activeTabNewIndex]);  
}

for (const tabHeader of tabHeaders) {
  tabHeader.addEventListener('click', doTabHeaderClick);
}
