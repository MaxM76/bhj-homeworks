const sliderImages = document.getElementsByClassName("slider__item");
let currentImage;

for (let i = 0; i < sliderImages.length; i++) {
	if (sliderImages.item(i).classList.contains("slider__item_active")) {
		currentImage = i;
	}
}

const prevSliderArrow = document.querySelector(".slider__arrow_prev");
prevSliderArrow.onclick = function () {
	prevImage();
}

const nextSliderArrow = document.querySelector(".slider__arrow_next");
nextSliderArrow.onclick = function () {
	nextImage();
}

function showSliderImage(sliderImage) {
  sliderImage.classList.add("slider__item_active");
}

function hideSliderImage(sliderImage) {
  sliderImage.classList.remove("slider__item_active");
}

function nextImage() {
  hideSliderImage(sliderImages.item(currentImage));
  currentImage++;
  if (currentImage >= sliderImages.length) {
  	currentImage -= sliderImages.length;
  }
  showSliderImage(sliderImages.item(currentImage));
}

function prevImage() {
  hideSliderImage(sliderImages.item(currentImage));
  currentImage--;
  if (currentImage < 0) {
  	currentImage += sliderImages.length;
  }
  showSliderImage(sliderImages.item(currentImage));
}