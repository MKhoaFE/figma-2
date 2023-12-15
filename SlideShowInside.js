// let wrap_extra = document.querySelector(".wrap-slide2"),
//   itemWidth_extra = document.querySelectorAll(".item-slide2")[0].clientWidth,
//   buttonPrev = document.querySelector(".prev-main"),
//   buttonNext = document.querySelector(".next-main");

// let toggle_extra = document.querySelectorAll(".slide2"),
//   items_extra = document.querySelectorAll(".item-slide2");

// let position_extra = 0;
// let currentDot_extra = 0;

// showSlide(wrap_extra, 0, 0);

// buttonNext.addEventListener("click", function () {
//   showSlide(wrap_extra, -itemWidth_extra, 1);
// });

// buttonPrev.addEventListener("click", function () {
//   showSlide(wrap_extra, itemWidth_extra, -1);
// });

// function showSlide(elemm, pixx, z) {
//   position_extra += pixx;
//   currentDot_extra += z;

//   if (position_extra > 0) {
//     position_extra = -elemm.clientWidth + pixx;
//     currentDot_extra = toggle_extra.length - 1;
//   } else if (position_extra < -elemm.clientWidth - pixx) {
//     position_extra = 0;
//     currentDot_extra = 0;
//   }
//   elemm.style.transform = "translateX(" + position_extra + "px)";
//   toggle_extra.forEach((item) => item.classList.remove("active"));
//   toggle_extra[currentDot_extra].classList.add("active");
// }

// for (let i = 0; i < items_extra.length; i++) {
//   toggle_extra[i].addEventListener("click", function () {
//     position_extra = -items_extra[i].clientWidth * i;
//     currentDot_extra = i;
//     wrap_extra.style.transform = "translateX(" + position_extra + "px)";

//     toggle_extra.forEach((item) => item.classList.remove("active"));
//     toggle_extra[currentDot_extra].classList.add("active");
//   });
// }


let wrap = document.querySelector(".wrap-slide2"),
    buttonPrev = document.querySelector(".prev"),
    buttonNext = document.querySelector(".next"),
    itemWidth = document.querySelectorAll(".item-slide2")[0].clientWidth;

let toggle = document.querySelectorAll(".slide2"),
    items = document.querySelectorAll(".item-slide2");

let position = 0;
let currentDot = 0;
const slideWidth = 1007;
showSlide(wrap, 0, 0);

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



for (let i = 0; i < items.length && i < toggle.length; i++) {
  if (toggle[i] && items[i]) {
    toggle[i].addEventListener("click", function () {
      position = -items[i].clientWidth * i;
      currentDot = i;
      wrap.style.transform = "translateX(" + position + "px)";

      toggle.forEach((item) => item.classList.remove("active"));
      toggle[currentDot].classList.add("active");
    });
  } else {
    console.error("Toggle or items element at index " + i + " is undefined.");
  }
}


//slide 3 home
let wrap_3 = document.querySelector(".wrap-slide3"),
    itemWidth_3 = document.querySelectorAll(".item-slide3")[0].clientWidth;

let toggle_3 = document.querySelectorAll(".slide3"),
    items_3 = document.querySelectorAll(".item-slide3");

let position_3 = 0;
let currentDot_3 = 0;

showSlide_3(wrap_3, 0, 0);

function showSlide_3(elem, pix, n) {
  position_3 += pix;
  currentDot_3 += n;
  
  if (position_3 > 0) { 
    position_3 = -elem.clientWidth + pix;
    currentDot_3 = toggle_3.length - 1;
  } else if (position_3 < -elem.clientWidth - pix) {
    position_3 = 0;
    currentDot_3 = 0;
  }
  elem.style.transform = "translateX(" + position_3 + "px)";
  toggle_3.forEach((item) => item.classList.remove("active"));
  toggle_3[currentDot_3].classList.add("active");
}


for(let i = 0; i < items_3.length; i++) {
  toggle_3[i].addEventListener("click", function() {
    position_3 = (-items_3[i].clientWidth * i);
    currentDot_3 = i;
    wrap_3.style.transform = "translateX(" + position_3 + "px)";
    
    toggle_3.forEach((item) => item.classList.remove("active"));
    toggle_3[currentDot_3].classList.add("active");
  })
}


//slide 4 home
let wrap_4 = document.querySelector(".wrap-slide4"),
    itemWidth_4 = document.querySelectorAll(".item-slide4")[0].clientWidth;

let toggle_4 = document.querySelectorAll(".slide4"),
    items_4 = document.querySelectorAll(".item-slide4");

let position_4 = 0;
let currentDot_4 = 0;

showSlide_4(wrap_4, 0, 0);

function showSlide_4(elem, pix, n) {
  position_4 += pix;
  currentDot_4 += n;
  
  if (position_4 > 0) { 
    position_4 = -elem.clientWidth + pix;
    currentDot_4 = toggle_4.length - 1;
  } else if (position_4 < -elem.clientWidth - pix) {
    position_4 = 0;
    currentDot_4 = 0;
  }
  elem.style.transform = "translateX(" + position_4 + "px)";
  toggle_4.forEach((item) => item.classList.remove("active"));
  toggle_4[currentDot_4].classList.add("active");
}

for(let i = 0; i < items_4.length; i++) {
  toggle_4[i].addEventListener("click", function() {
    position_4 = (-items_4[i].clientWidth * i);
    currentDot_4 = i;
    wrap_4.style.transform = "translateX(" + position_4 + "px)";
    
    toggle_4.forEach((item) => item.classList.remove("active"));
    toggle_4[currentDot_4].classList.add("active");
  })
}