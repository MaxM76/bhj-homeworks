const menuLinkElements = document.getElementsByClassName("menu__link");

for (let i = 0; i < menuLinkElements.length; i++) {
  menuLinkElements.item(i).onclick = function () {
  	let element = this.parentElement.querySelector("ul.menu_sub");
  	if (element == null) {
  		return true;
  	} else {
  		closeActiveSubmenus();
  	  showMenuItem(element);
  	  return false;  		
  	}
  };
}

function showMenuItem(menuItem) {
  menuItem.classList.add("menu_active");
}

function hideMenuItem(menuItem) {
  menuItem.classList.remove("menu_active");
}

function closeActiveSubmenus() {
	let activeSubmenus = document.getElementsByClassName("menu_active");
	for (let i = 0; i < activeSubmenus.length; i++) {
		hideMenuItem(activeSubmenus.item(i));
	}	
}