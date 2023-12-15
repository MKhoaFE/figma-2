let slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide");
  let ct = document.getElementsByClassName("content");
  let ol = document.getElementById("overlay");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.zIndex = "1";
    slides[i].style.display = "none";

  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].style.zIndex = "902"; 


  
  dots[slideIndex-1].className += " active";


}


let wrapp = document.querySelector(".wrapperr"),
    itemWidthh = document.querySelectorAll(".itemm")[0].clientWidth;

let togglee = document.querySelectorAll(".slideInside"),
    itemss = document.querySelectorAll(".itemm");

let positionn = 0;
let currentDott = 0;

showSlide(wrapp, 0, 0);

function showSlide(elem, pix, n) {
  positionn += pix;
  currentDott += n;
  
  if (positionn > 0) { 
    positionn = -elem.clientWidth + pix;
    currentDott = togglee.length - 1;
  } else if (positionn < -elem.clientWidth - pix) {
    positionn = 0;
    currentDott = 0;
  }
  elem.style.transform = "translateX(" + positionn +"px)";
  togglee.forEach((item) => item.classList.remove("active"));
  togglee[currentDott].classList.add("active");
}


for(let i = 0; i < itemss.length; i++) {
  togglee[i].addEventListener("click", function() {
    position = (-itemss[i].clientWidth * i);
    currentDott = i;
    wrapp.style.transform = "translateX(" + position + "px)";
    
    togglee.forEach((item) => item.classList.remove("active"));
    togglee[currentDott].classList.add("active");
  })
}