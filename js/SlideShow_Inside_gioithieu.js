let wrap = document.querySelector(".wrap3"),
    itemWidth = document.querySelectorAll(".item")[0].clientWidth,
    buttonPrevv = document.querySelector(".prev"),
    buttonNextt = document.querySelector(".next");

let toggle = document.querySelectorAll(".slider__toggle"),
    items = document.querySelectorAll(".item");

let position = 0;
let currentDot = 0;
const slideWidth = 620;
showSlide(wrap, 0, 0);

buttonNextt.addEventListener("click", function() {
  showSlide(wrap, -slideWidth, 1); 
})

buttonPrevv.addEventListener("click", function() {
  showSlide(wrap, slideWidth, -1); 
})

function showSlide(elem, pix, n) {
  position += pix;
  currentDot += n;
  
  if (position > 0) { 
    position = -elem.clientWidth + pix;
    currentDot = toggle.length - 1;
  } else if (position < -elem.clientWidth - pix) {
    position = 0;
    currentDot = 0;
  }
  elem.style.transform = "translateX(" + position +"px)";
  toggle.forEach((item) => item.classList.remove("active"));
  toggle[currentDot].classList.add("active");
}



for(let i = 0; i < items.length; i++) {
  toggle[i].addEventListener("click", function() {
    position = (-items[i].clientWidth * i);
    currentDot = i;
    wrap.style.transform = "translateX(" + position + "px)";
    
    toggle.forEach((item) => item.classList.remove("active"));
    toggle[currentDot].classList.add("active");
  })
}
function autoSlide() {
  setInterval(function() {
  showSlide(wrap, -slideWidth, 1); // Di chuyển slide tự động về phía bên phải
  }, 3000); // 3000ms = 3 giây
  }
  
  autoSlide();