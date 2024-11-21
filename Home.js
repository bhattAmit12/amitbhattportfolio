

// main2
let scrollContainer1 = document.querySelector(".action1");
let backBtn1 = document.getElementById("backbtn1");
let nextBtn1 = document.getElementById("nextbtn1");

scrollContainer1.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer1.scrollLeft += evt.deltaY;
  scrollContainer1.style.scrollBehavior = "auto";
});

nextBtn1.addEventListener("click", () => {
  scrollContainer1.style.scrollBehavior = "smooth";
  scrollContainer1.scrollLeft += 340;
});

backBtn1.addEventListener("click", () => {
  scrollContainer1.style.scrollBehavior = "smooth";
  scrollContainer1.scrollLeft -= 340;
});

// download section

let scrollContainer2 = document.querySelector(".slider3");
let backBtn2 = document.getElementById("backbtn2");
let nextBtn2 = document.getElementById("nextbtn2");



nextBtn2.addEventListener("click", () => {
  scrollContainer2.style.scrollBehavior = "smooth";
  scrollContainer2.scrollLeft += 340;
});

backBtn2.addEventListener("click", () => {
  scrollContainer2.style.scrollBehavior = "smooth";
  scrollContainer2.scrollLeft -= 340;
});

// profile

let showprofile = document.getElementById("showprofile");

function abc(){
  showprofile.classList.toggle("open-menu");
  
}

let showprofile1 = document.getElementById("showprofile1");

function def(){
  showprofile1.classList.toggle("open-menu1");
  
}





// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


