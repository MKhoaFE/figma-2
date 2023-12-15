let wrap_main = document.querySelector(".wrap-main"),
    itemWidth_main = document.querySelectorAll(".mySlides")[0].clientHeight;

let toggle_main = document.querySelectorAll(".slide"),
    items_main = document.querySelectorAll(".mySlides");

let position_main = 0;
let currentDot_main = 0;

showSlide(wrap_main, 0, 0);


function showSlide(elemm, pixx, z) {
  position_main += pixx;
  currentDot_main += z;
  
  if (position_main > 0) { 
    position_main = -elemm.clientWidth + pixx;
    currentDot_main = toggle_main.length - 1;
  } else if (position_main < -elemm.clientWidth - pixx) {
    position_main = 0;
    currentDot_main = 0;
  }
  elemm.style.transform = "translateY(" + position_main +"px)";
  toggle_main.forEach((item) => item.classList.remove("active"));
  toggle_main[currentDot_main].classList.add("active");
}




for(let i = 0; i < items_main.length; i++) {
  toggle_main[i].addEventListener("click", function() {
    position_main = (-items_main[i].clientHeight * i);
    currentDot_main = i;
    wrap_main.style.transform = "translateY(" + position_main + "px)";
    
    toggle_main.forEach((item) => item.classList.remove("active"));
    toggle_main[currentDot_main].classList.add("active");
  })
}