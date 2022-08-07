let slideIndex = 1;
showSlides(slideIndex);
    next.onclick = function () {
    showSlides(slideIndex += 1);
}
    prev.onclick = function() {
    showSlides(slideIndex -= 1);  
}
function showSlides(img) {
    let i;
    let slides = document.getElementsByClassName('item');
    let sliderDotsItem = document.getElementsByClassName('sliderDotsItem');
    if (img > slides.length) {
      slideIndex = 1
    }
    if (img < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < sliderDotsItem.length; i++) {
        sliderDotsItem[i].className = sliderDotsItem[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    sliderDotsItem[slideIndex - 1].className += ' active';
}
function autoSlider() {
    showSlides(slideIndex += 1);
}
setInterval(autoSlider, 5000);
