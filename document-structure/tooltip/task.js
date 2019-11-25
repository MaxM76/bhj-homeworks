const hasTooltipElements = document.getElementsByClassName("has-tooltip");

function deleteExistedTooltip() {
  let existedTooltipElement = existedTooltip();
  if (existedTooltipElement != null) {
    existedTooltipElement.removeEventListener("click", deleteExistedTooltip);
    existedTooltipElement.remove();
  }
}

function existedTooltip() {
  return document.querySelector(".tooltip");
}

function adjustPosition(rect, relativePosition) {
  let result ="style=";

  switch (relativePosition) {
    case "top":
      result = result
        + '"left: '
        + Math.ceil(rect.left + pageXOffset)
        + 'px; bottom: '
        + Math.ceil(document.documentElement.clientHeight - rect.top - pageYOffset + 1)
        + 'px"';
      break;
    case "bottom":
      result = result
        + '"left: '
        + Math.ceil(rect.left + pageXOffset)
        + 'px; top: '
        + Math.ceil(rect.bottom)
        + 'px"';
      break;
    case "left":
      result = result
        + '"right: '
        + Math.ceil(document.documentElement.clientWidth - rect.left - pageXOffset - 1)
        + 'px; bottom: '
        + Math.ceil(document.documentElement.clientHeight - rect.bottom - pageYOffset)
        + 'px"';
      break;
    case "right":
      result = result
        + '"left: '
        + Math.ceil(rect.right + pageXOffset + 1)
        + 'px; bottom: '
        + Math.ceil(document.documentElement.clientHeight - rect.bottom - pageYOffset)
        + 'px"';
      break;
    default:
      result ="";
      break;  
  }
  return result;
}

function doHasTooltipElementClick() {
  deleteExistedTooltip();
  const where  = [
    "beforeBegin",
    "afterBegin",
    "beforeEnd",
    "afterEnd"
  ];
  const box = this.getBoundingClientRect();
  const html = `<div class="tooltip tooltip_active" ${adjustPosition(box, this.dataset.position)}>${this.title}</div>`;

  this.insertAdjacentHTML(where[3], html);
  let existedTooltipElement = existedTooltip();
    
  if (existedTooltipElement  != null) {
    existedTooltipElement.addEventListener("click", deleteExistedTooltip);
  }

  event.preventDefault();
}

for (const hasTooltipElement of hasTooltipElements) {
  hasTooltipElement.addEventListener("click", doHasTooltipElementClick);
}
