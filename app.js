// js/app.js
var sliderImg = document.querySelector(".slider-img");
var allSliderImg = ['hero-slider-img-1.png', 'hero-slider-img-2.png', 'hero-slider-img-3.png'];
var i = 0;

function prev(){
    if (i <= 0) i = allSliderImg.length;
    i--;
    return setImg();
}

// function next(){
//     if(i <=0) i = sliderImg.length;
//     i--;
//     return setImg();
// }
function next(){
    if(i >= allSliderImg.length -1) i = -1;
    i++;
    return setImg();
}
function setImg(){
    return sliderImg.setAttribute('src', 'images/' + allSliderImg[i]);
}